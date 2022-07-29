import '@vaadin/vaadin-button';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-date-time-picker';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-split-layout';
import '@vaadin/vaadin-text-field';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('master-detail2-view')
export class MasterDetail2View extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }

  render() {
    return html`<vaadin-split-layout>
      <div class="grid-wrapper">
        <vaadin-grid id="grid"></vaadin-grid>
      </div>
      <div class="editor-layout">
        <div class="editor">
          <vaadin-form-layout>
            <vaadin-text-field label="First name" id="firstName"></vaadin-text-field
            ><vaadin-text-field label="Last name" id="lastName"></vaadin-text-field
            ><vaadin-text-field label="Email" id="email"></vaadin-text-field
            ><vaadin-text-field label="Phone" id="phone"></vaadin-text-field
            ><vaadin-date-picker label="Date of birth" id="dateOfBirth"></vaadin-date-picker
            ><vaadin-text-field label="Occupation" id="occupation"></vaadin-text-field
            ><vaadin-checkbox id="important">Important</vaadin-checkbox>
          </vaadin-form-layout>
        </div>
        <vaadin-horizontal-layout class="button-layout">
          <vaadin-button theme="primary" id="save">Save</vaadin-button>
          <vaadin-button theme="tertiary" slot="" id="cancel">Cancel</vaadin-button>
        </vaadin-horizontal-layout>
      </div>
    </vaadin-split-layout>`;
  }
}
