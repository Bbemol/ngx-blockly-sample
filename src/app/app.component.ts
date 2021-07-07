import { Component } from '@angular/core';
import { Category, CustomBlock, NgxBlocklyConfig, NgxBlocklyGeneratorConfig, NgxToolboxBuilderService } from 'ngx-blockly';
import { TestBlock } from './blocks/test-block';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-blockly-sample';
  public customBlocks: CustomBlock[] = [
    new TestBlock(),
  ];
  public config: NgxBlocklyConfig = {
    toolbox: `<xml id="toolbox" style="display: none">' +
      '<block type="TestBlock"></block>' +
      '</xml>`,
    scrollbars: true,
    trashcan: true,
    generator: [
      NgxBlocklyConfig.JAVASCRIPT,
    ]
  }
  public customCategory = new Category(
    'Elements',
    '#483d8b',
    [...this.customBlocks]
  );

  public generatorConfig: NgxBlocklyGeneratorConfig = {
    javascript: true
    // you can add other generators such as python
  };

  constructor(
    ngxToolboxBuilder : NgxToolboxBuilderService
  ) {
    ngxToolboxBuilder.nodes = [
      this.customCategory,
    ];
    this.config.toolbox = ngxToolboxBuilder.build();
  }

  onCode(code: string): void{
    console.log(code)
  }
}
