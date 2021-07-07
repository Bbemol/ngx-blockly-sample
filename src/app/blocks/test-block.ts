import { CustomBlock } from 'ngx-blockly';

export class TestBlock extends CustomBlock {


    constructor() {
        // Add Mutator or further args if needed
        super('TestBlock');
        this.class = TestBlock;
    }

    defineBlock() {
        this.block.appendStatementInput('If').setCheck(['Input']).appendField('If');
        this.block.appendStatementInput('Then').setCheck(['Output']).appendField('Then');
        this.block.setColour('250');
        this.block.maxInstances = 1;
    }

    toXML() {
        return '<block type="TestBlock"></block>';
    }

    public toJavaScriptCode(block: CustomBlock): string | any[] {
        console.log('Do anything you want')
        return 'Not implemented';
    }

    onChange(changeEvent: any) {
        console.log(changeEvent);
    }
}
