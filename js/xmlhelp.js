var loadXML = function(xmlFile){
    var xmlDoc;
    if (window.ActiveXObject) {
        xmlDoc = new ActiveXObject('Microsoft.XMLDOM');//IE浏览器
        xmlDoc.async = false;
        xmlDoc.load(xmlFile);
    }
    else if (isFirefox=navigator.userAgent.indexOf("Firefox")>0) { //火狐浏览器
    //else if (document.implementation && document.implementation.createDocument) {//这里主要是对谷歌浏览器进行处理
        xmlDoc = document.implementation.createDocument('', '', null);
        xmlDoc.load(xmlFile);
    }
    else{ //谷歌浏览器
      var xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET",xmlFile,false);
        xmlhttp.send(null);
        if(xmlhttp.readyState == 4){
        xmlDoc = xmlhttp.responseXML.documentElement;
        }
    }
    return xmlDoc
}

function getXmlBasicDate(){
    var xmlDoc = loadXML('../c_config.xml');
    // console.log(xmlDoc.getElementsByTagName('BasicDate')[0].childNodes[0])
    return xmlDoc.getElementsByTagName('BasicDate')[0].childNodes[0].nodeValue;
}

// function setXmlBasicDate(dateStr){
//     var xmlDoc = loadXML('../c_config.xml');
//     xmlDoc.getElementsByTagName('BasicDate')[0].childNodes[0].nodeValue = dateStr;
// }




// 获取元素值

// x=xmlDoc.getElementsByTagName("title")[0];
// y=x.childNodes[0];
// txt=y.nodeValue;
// 结果：txt = "Everyday Italian"

// 获取属性值 - getAttribute()

// xmlDoc=loadXMLDoc("books.xml");
// txt=xmlDoc.getElementsByTagName("title")[0].getAttribute("lang");
// 结果：txt = "en"

// 获取属性值 - getAttributeNode()

// x=xmlDoc.getElementsByTagName("title")[0].getAttributeNode("lang");
// txt=x.nodeValue;

// 改变文本节点得值

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc .getElementsByTagName("title")[0].childNodes[0];
// x.nodeValue="Easy Cooking";

// 改变属性的值

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc .getElementsByTagName("book");
// x[0].setAttribute("category","food");

// 删除元素节点

// xmlDoc = loadXMLDoc("books.xml");
// y = xmlDoc.getElementsByTagName("books")[0];
// xmlDoc.documentElement.removeChild(y);

// 删除自身

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("book")[0];
// x.parentNode.removeChild(x);

// 删除文本节点

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("title")[0];
// y = x.childNodes[0];
// x.removeChild(y);

// 清空文本节点

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("title")[0];
// x.nodeValue = ""；

// 根据名称删除属性节点

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("book");
// x[0].removeAttribute('category');

// 根据对象删除属性节点

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("book");
// for(var i=0;i<x.length;i++){
//        while(x[i].attributes.length>0){
//                 attnode=x[i].attributes[0];
//                 old_att=x[i].removeAttributeNode(attnode);
//        }
// }
// x[0].removeAttribute(category);


// 替换元素节点

//  replaceChild() 方法用于替换节点。
// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.documentElement;

// //create a book element, title element and a text node
// newNode = xmlDoc.createElement("book");
// newTitle = xmlDoc.createElement("title");
// newText = xmlDoc.createTextNode("A Notebook");

// //add the text node to the title node,
// newTitle.appendChild(newText);
// //add the title node to the book node
// newNode.appendChild(newTitle);

// y = xmlDoc.getElementsByTagName("book")[0];
// //replace the first book node with the new node
// x.replaceChild(newNode,y);

// 替换文本节点中的数据

// replaceData()方法用于替换文本节点中的数据。
// replaceData()方法有三个参数：
// offset-在何处开始替换字符。Offset值以0开始。
// length-要替换多少字符。
// string-要插入的字符串。

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
// x.replaceDate(0,8,"Easy");

// 用nodeValue属性来替换文本节点中的数据。
// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
// x.nodeValue="Easy Italian";

// 创建新的元素节点

// createElement()方法创建新的元素节点。
// xmlDoc = loadXMLDoc("books.xml");
// newNode = xmlDoc.createElement("edition");
// x = xmlDoc.getElementsByTagName("book")[0];
// x.appendChild(newNode);

// 创建新的属性节点

// xmlDoc = loadXMLDoc("books.xml");
// newAtt = xmlDoc.createAttribute("edition");
// newAtt.nodeValue ="first";
// x = xmlDoc.getElementsByTagName("title");
// x[0].setAttributeNode(newAtt);

// 通过setAttribute创建属性。
// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("book");
// x[0].setAttribute("edition","first");

//  创建文本节点

// createTextNode()方法创建新的文本节点。
// xmlDoc = loadXMLDoc("books.xml");
// newNode = xmlDoc.createElement("publisher");
// newText = xmlDoc.createTextNode("english");
// newNode.appendChild(newText);
// x = xmlDoc.getElementsByTagName("book")[0];
// x.appendChild(newNode);

// 创建一个CDATA Section节点

// xmlDoc = loadXMLDoc("books.xml");
// newCDATA = xmlDoc.createCDATASection("Special offer & Book Sale");
// x = xmlDoc.getElementsByTagName("book")[0];
// x.appendChild(newCDATA);

// 创建注释节点

// xmlDoc = loadXMLDoc("books.xml");
// newComment = xmlDoc.createComment("Revised March 2008");
// x=xmlDoc.getElementsByTagName("book")[0];
// x.appendChild(newComment);

// 添加节点

// xmlDoc = loadXMLDoc("books.xml");
// newNode = xmlDoc.createElement("publisher");
// x = xmlDoc.getElementsByTagName("book")[0];
// x.appendChild(newNode);

// 插入节点--insertBefore()

// xmlDoc = loadXMLDoc("books.xml");
// newNode = xmlDoc.createElement("book");
// x = xmlDoc.documentElement;
// y = xmlDoc.getElementsByTagName("book")[3];
// x.insertBefore(newNode,y);

// 添加新属性

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("book");
// x[0].setAttribute("edition","first");

// 向文本节点添加文本--insertData()

// xmlDoc = loadXMLDoc("books.xml");
// x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
// x.insertData(0,"Easy");

// 复制节点

// xmlDoc = loadXMLDoc("books.xml");
// oldNode = xmlDoc.getElementsByTagName("book")[0];
// newNOde = oldNode.cloneNode(true);
// xmlDoc.documentElement.appendChild(newNode);
// //output all titles
// y = xmlDoc.getElementsByTagName("title");
// for(var i=0;i<y.length;i++){
//      document.write(y[i].childNodes[0].nodeValue);
//      document.write("<br/>");
// }