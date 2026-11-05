import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectiveNgforVsFor } from './directive-ngfor-vs-for/directive-ngfor-vs-for';
import { DirectiveNgswitchVsSwitch } from './directive-ngswitch-vs-switch/directive-ngswitch-vs-switch';
import { AttributeDirective } from './attribute-directive/attribute-directive';
import { Signals } from './signals/signals';
import { LinkedSignals } from './linked-signals/linked-signals';
// import { DataBinding } from './data-binding/data-binding';
// import { Directives } from './directives/directives';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // DataBinding,
    // Directives
    // DirectiveNgforVsFor
    // DirectiveNgswitchVsSwitch
    // StructuralDirective
    // Signals
    LinkedSignals,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('project1');
}
