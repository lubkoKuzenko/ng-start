import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  apply,
  url,
  applyTemplates,
  mergeWith,
  renameTemplateFiles,
  move,
  filter,
} from "@angular-devkit/schematics";
import { normalize, strings } from "@angular-devkit/core";

import { ModuleOptions } from "./schema";

function createComponentsModuleFileDefinition(options: ModuleOptions): Rule {
  const templateSource = apply(url("./files"), [
    filter((path) => path.endsWith("/components.module.ts.template")),
    applyTemplates({ ...strings, ...options }),
    renameTemplateFiles(),
    move(normalize(`${options.name}/components`)),
  ]);

  return mergeWith(templateSource);
}

function createContainersModuleFileDefinition(options: ModuleOptions): Rule {
  const templateSource = apply(url("./files"), [
    filter((path) => path.endsWith("/containers.module.ts.template")),
    applyTemplates({ ...strings, ...options }),
    renameTemplateFiles(),
    move(normalize(`${options.name}/containers`)),
  ]);

  return mergeWith(templateSource);
}

function createOtherFolders(options: ModuleOptions): Rule {
  return (tree: Tree, _: SchematicContext) => {
    tree.create(normalize(`${options.name}/services/index.ts`), "");
    tree.create(normalize(`${options.name}/interfaces/index.ts`), "");
    tree.create(normalize(`${options.name}/enums/index.ts`), "");
    tree.create(normalize(`${options.name}/mocks/index.ts`), "");

    return tree;
  };
}

function createMainModuleFileDefinition(options: ModuleOptions): Rule {
  const templateSource = apply(url("./files"), [
    filter((path) => path.endsWith("__name@dasherize__.module.ts.template")),
    // strings.camelize
    applyTemplates({ ...strings, ...options }),
    renameTemplateFiles(),
    move(normalize(`${options.name}/`)),
  ]);

  return mergeWith(templateSource);
}

function createMainModuleRoutingDefinition(options: ModuleOptions): Rule {
  const templateSource = apply(url("./files"), [
    filter((path) => path.endsWith("__name@dasherize__-routing.module.ts.template")),
    applyTemplates({ ...strings, ...options }),
    renameTemplateFiles(),
    move(normalize(`${options.name}/`)),
  ]);

  return mergeWith(templateSource);
}

export function newModuleSchematics(options: ModuleOptions): Rule {
  return chain([
    createComponentsModuleFileDefinition(options),
    createContainersModuleFileDefinition(options),
    createOtherFolders(options),
    createMainModuleRoutingDefinition(options),
    createMainModuleFileDefinition(options),
  ]);
}
