import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({reflect: true}) my_title: string = '';
  @Prop({reflect: true, mutable: true}) opened: boolean = false;
  
  onCloseDrawer() {
    this.opened = false;
  }
  
  render() {
    return (
      <aside>
        <header>
          <h1>{this.my_title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class="active">Navigation</button>
          <button>Contact</button>
        </section>
        <main>
          <slot></slot>
        </main>
      </aside>
    );
  }
}