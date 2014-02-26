var fnTest = function (node) {   
	node.addField("Sequence", "Undefined", "");
	node.addField("Result", "Undefined", "");

    pyCode = "import sys\nself.Result = self.Sequence";
    node.setPythonCompute(pyCode);
};

defineNodeType('test','example',fnTest);

createCassette("test");

addCassetteItem('GnomeConver', 'test.example', "test.png");

