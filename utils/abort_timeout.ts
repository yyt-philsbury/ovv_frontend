export default function timeoutSignalController(timeoutInMS: number) {
  const controller = new AbortController();

  setTimeout(() => {
    controller.abort();
  }, timeoutInMS);

  return controller;
}

