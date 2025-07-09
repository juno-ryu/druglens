/**
 * Simple Logger
 * @author: snow
 * 
 * public method 
 * - debug(string)
 * - error(string)
 */
export class Logger {
  // 5_에이콘_모니터링_웹_로그
  private webhook;
  // Logger name
  private module;
  private name;
  private env;
  // Logger level
  private level = ['ERROR'];
  private CONSOLE = 1;
  private SLACK = 2;
  private out = this.SLACK;

  public constructor(name:string) {
    this.name = name;
    this.webhook = process.env.WEBHOOK_URL;
    this.module = process.env.SERVICE_NAME;
    this.env = process.env.VERCEL_ENV || 'local';
  }

  public debug(msg:string) {
    this.log('DEBUG', msg);
  }
  public error(msg:string) {
    this.log('ERROR', msg);
  }

  private log(level:string, msg:string) {
    if (!this.level.includes(level)) {
      return;
    }
    msg = `${level} ${this.env} [${this.module}][${this.name}] ${msg}`;
    // console log
    if (this.out & this.CONSOLE) {
      console.log(msg);
    }
    // slack log
    if (!(this.out & this.SLACK)) {
      return;
    }
    const message = {
        text: msg,
    };

    if (!this.webhook) {
      return;
    }
    
    fetch(this.webhook, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Slack API returned an error: ${response.statusText}`);
      }
    }).catch((error) => {
      // Slack은 debug용 log를 위한 기능이므로
      // 발생한 error는 서비스에 영향을 주지 않기 위해 로깅만 하고 무시한다.
      console.error('Error sending message to Slack:', error);
    });
  }
}
