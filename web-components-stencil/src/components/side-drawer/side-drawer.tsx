import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({reflect: true}) my_title: string = '';
  render() {
    return (
      <aside>
        <header><h1>{this.my_title}</h1></header>
        <main>
          <slot></slot>
        </main>
      </aside>
    );
  }
}