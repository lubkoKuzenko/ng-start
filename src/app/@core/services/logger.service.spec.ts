/* eslint no-console: 0 */
import { Logger, LogLevel, LogOutput } from "./logger.service";

const logMethods = ["log", "info", "warn", "error"];

describe("Logger", () => {
  let savedConsole: any[];
  let savedLevel: LogLevel;
  let savedOutputs: LogOutput[];

  beforeAll(() => {
    savedConsole = [];
    logMethods.forEach((m) => {
      savedConsole[m] = console[m];
      console[m] = () => {};
    });
    savedLevel = Logger.level;
    savedOutputs = Logger.outputs;
  });

  beforeEach(() => {
    Logger.level = LogLevel.debug;
  });

  afterAll(() => {
    logMethods.forEach((m) => {
      console[m] = savedConsole[m];
    });
    Logger.level = savedLevel;
    Logger.outputs = savedOutputs;
  });

  it("should create an instance", () => {
    expect(new Logger()).toBeTruthy();
  });

  it("should add a new LogOutput and receives log entries", () => {
    // Arrange
    const outputSpy = jasmine.createSpy("outputSpy");
    const log = new Logger("test");

    // Act
    Logger.outputs.push(outputSpy);

    log.debug("d");
    log.info("i");
    log.warn("w");
    log.error("e", { error: true });

    // Assert
    expect(outputSpy).toHaveBeenCalled();
    expect(outputSpy.calls.count()).toBe(4);
    expect(outputSpy).toHaveBeenCalledWith("test", LogLevel.debug, "d");
    expect(outputSpy).toHaveBeenCalledWith("test", LogLevel.info, "i");
    expect(outputSpy).toHaveBeenCalledWith("test", LogLevel.warning, "w");
    expect(outputSpy).toHaveBeenCalledWith("test", LogLevel.error, "e", { error: true });
  });

  it("should add a new LogOutput and receives only production log entries", () => {
    // Arrange
    const outputSpy = jasmine.createSpy("outputSpy");
    const log = new Logger("test");

    // Act
    Logger.outputs.push(outputSpy);
    Logger.enableProductionMode();

    log.debug("d");
    log.info("i");
    log.warn("w");
    log.error("e", { error: true });

    // Assert
    expect(outputSpy).toHaveBeenCalled();
    expect(outputSpy.calls.count()).toBe(2);
    expect(outputSpy).toHaveBeenCalledWith("test", LogLevel.warning, "w");
    expect(outputSpy).toHaveBeenCalledWith("test", LogLevel.error, "e", { error: true });
  });
});
