const html = await loadHtml("body.html");

class proc extends ThirdPartyAppProcess {
  constructor(pid: number, parentPid: number, app: AppProcessData, operationId: string, workingDirectory: string, ...args) {
    super(pid, parentPid, app, operationId, workingDirectory);
  }

  async render(): Promise<void> {
    const body = this.getBody()! as HTMLDivElement;
    body.innerHTML = html;

    /* Do some interesting stuff here */
    this.myAmazingFunction();
  }

  myAmazingFunction(): void {
    // Check if the process is disposed at the top of every method. This makes sure the process has the least amount of lasting effects.
    if (this._disposed) return;

    Debug("Working!");
  }
}

export default proc;
