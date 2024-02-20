import { Clipboard } from '@angular/cdk/clipboard';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'docs-installation',
  standalone: true,
  template: `
    <div>
      <h2>Installation</h2>

      <code class="code" (click)="onCopy()">
        npm install ngx-sonner
        <button aria-label="Copy code" class="copy">
          @if (copying()) {
            <div>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                shape-rendering="geometricPrecision">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
          } @else {
            <div>
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                shape-rendering="geometricPrecision">
                <path
                  d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z" />
              </svg>
            </div>
          }
        </button>
      </code>
    </div>
  `,
  styles: `
    .code {
      padding: 0 62px 0 12px;
      border-radius: 6px;
      background: linear-gradient(to top, var(--gray2), var(--gray1) 8px);
      font-family: var(--font-mono);
      font-size: 14px;
      position: relative;
      cursor: copy;
      height: 40px;
      border: 1px solid var(--gray3);
      display: flex;
      align-items: center;
    }

    .copy {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      border-radius: 50%;
      border: none;
      border: 1px solid var(--gray4);
      background: #fff;
      color: var(--gray12);
      border-radius: 5px;
      width: 26px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .copy div {
      display: flex;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallationComponent {
  private readonly clipboard = inject(Clipboard);

  copying = signal(false);

  onCopy() {
    this.clipboard.copy('npm install ngx-sonner');
    this.copying.set(true);
    setTimeout(() => {
      this.copying.set(false);
    }, 2000);
  }
}
