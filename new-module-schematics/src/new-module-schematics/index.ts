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
    applyTemplates({
      ...strings,
      ...options,
    }),
    renameTemplateFiles(),
    move(normalize(`${options.prefix}-${options.name}/components`)),
  ]);

  return mergeWith(templateSource);
}

function createContainersModuleFileDefinition(options: ModuleOptions): Rule {
  const templateSource = apply(url("./files"), [
    filter((path) => path.endsWith("/containers.module.ts.template")),
    applyTemplates({
      ...strings,
      ...options,
    }),
    renameTemplateFiles(),
    move(normalize(`${options.prefix}-${options.name}/containers`)),
  ]);

  return mergeWith(templateSource);
}

function createDataRelatedFolders(options: ModuleOptions): Rule {
  return (tree: Tree, _: SchematicContext) => {
    tree.create(normalize(`${options.prefix}-${options.name}/services/index.ts`), "");
    tree.create(normalize(`${options.prefix}-${options.name}/interfaces/index.ts`), "");
    tree.create(normalize(`${options.prefix}-${options.name}/enums/index.ts`), "");
    tree.create(normalize(`${options.prefix}-${options.name}/mocks/index.ts`), "");

    return tree;
  };
}

function createMainModuleFileDefinition(options: ModuleOptions): Rule {
  const templateSource = apply(url("./files"), [
    filter((path) => path.endsWith("__name@dasherize__.module.ts.template")),
    // strings.camelize
    applyTemplates({
      ...strings,
      ...options,
    }),
    renameTemplateFiles(),
    move(normalize(`${options.prefix}-${options.name}/`)),
  ]);

  return mergeWith(templateSource);
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function newModuleSchematics(options: ModuleOptions): Rule {
  return chain([
    createComponentsModuleFileDefinition(options),
    createContainersModuleFileDefinition(options),
    createDataRelatedFolders(options),
    createMainModuleFileDefinition(options),
  ]);
}
