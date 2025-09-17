import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'lib-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  title = input.required();
  subtitle = input.required();
  cta = input.required();
  ctaClick = output();

  containerStyle = {
    backgroundColor: '#1a1a2e',
    color: 'white',
    padding: '100px 20px',
    textAlign: 'center',
  };

  titleStyle = {
    fontSize: '48px',
    marginBottom: '16px',
  };

  subtitleStyle = {
    fontSize: '20px',
    marginBottom: '32px',
  };

  buttonStyle = {
    backgroundColor: '#0066ff',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '18px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  handleCtaClick() {
    this.ctaClick.emit();
  }
}
