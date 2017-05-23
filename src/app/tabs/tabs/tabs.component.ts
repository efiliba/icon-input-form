import { Component } from '@angular/core';

@Component({
  selector: 'tabs',
  template: `
    <ng-template #batman let-message="name">
      <h1>Batman is: {{message}}</h1>
    </ng-template>

    <div class="tab-container" showOneContainer active="superman">
      <ul class="tab-buttons">
        <li showOneTrigger="superman">Superman</li>
        <li showOneTrigger="batman">Batman</li>
        <li showOneTrigger="flash">Flash</li>
      </ul>

      <div class="tab-panel" showOne="superman">SuperMan</div>
      <div class="tab-panel" showOne="batman">
        <div [ngTemplateOutlet]="batman" [ngOutletContext]="{name: 'Bruce'}"></div>
      </div>
      <div class="tab-panel" showOne="flash">Flash</div>
    </div>
  `,
  styles: [`
input {
  cursor: text;
  box-sizing: border-box;
  background: white;
  outline: none;
  border: 1px solid #cccccc;
  width: 175px;
  height: 28px;
  line-height: 28px;
  padding-left: 3px;
  box-shadow: inset 0 1px 3px #e6e6e6;
  border-radius: 3px; }

input:focus {
  border-color: #129FEA;
  box-shadow: 0 0 5px rgba(102, 175, 233, 0.6); }

.ng-touched.ng-invalid {
  border: 1px solid #a94442; }

.tab-container .tab-buttons {
  list-style: none;
  text-align: left;
  margin-bottom: 0;
  padding: 7px 0 0 10px;
  background: #1976d2;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px; }
  .tab-container .tab-buttons li {
    display: inline-block;
    color: white;
    background: #3F94E9;
    font-size: 12px;
    padding: 2px 20px;
    cursor: pointer;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-top: 1px solid rgba(0, 0, 0, 0.117647);
    border-left: 1px solid rgba(0, 0, 0, 0.117647);
    border-right: 1px solid rgba(0, 0, 0, 0.117647);
    margin-right: 5px; }
    .tab-container .tab-buttons li.selected {
      background: white;
      color: rgba(26, 35, 38, 0.8);
      border-bottom: 1px solid white; }

.tab-container .tab-panel {
  border-left: 1px solid rgba(0, 0, 0, 0.117647);
  border-right: 1px solid rgba(0, 0, 0, 0.117647);
  border-bottom: 1px solid rgba(0, 0, 0, 0.117647); }
  `]
})
export class TabsComponent {
  messages = ['From here', 'and this'];
 }