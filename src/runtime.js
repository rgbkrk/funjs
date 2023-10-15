// Injecting our own runtime API into the globalThis object.
((globalThis) => {
  const core = Deno.core;
  function argsToMessage(...args) {
    return args.map((arg) => JSON.stringify(arg)).join(" ");
  }

  globalThis.console = {
    log: (...args) => {
      core.print(`[out]: ${argsToMessage(...args)}\n`, false);
    },
    error: (...args) => {
      core.print(`[err]: ${argsToMessage(...args)}\n`, true);
    },
  };

  globalThis.console.log(core.asyncOps);
  globalThis.console.log(core.initializeAsyncOps);

  // core.initializeAsyncOps();
  globalThis.fun = {
    readFile: (path) => {
      return core.ops.op_read_file(path);
    },
    writeFile: (path, contents) => {
      return core.ops.op_write_file(path, contents);
    },
    removeFile: (path) => {
      return core.ops.op_remove_file(path);
    },
    fetch: (url) => {
      return core.ops.op_fetch(url);
    },
  };
})(globalThis);
