import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({reflect: true}) my_title: string = '';
  @Prop({reflect: true}) opened: boolean = false;
  render() {
    let content = null;
    if (this.opened) {
      content = (
        <aside>
          <header><h1>{this.my_title}</h1></header>
          <main>
            <slot></slot>
          </main>
        </aside>
      );
    }
    return (
      content
    );
  }
}