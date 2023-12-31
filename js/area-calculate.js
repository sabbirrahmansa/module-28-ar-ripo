function areaCalculate(){

    // console.log('gjfkdgkgkj');
    // base ar kaj
    const baseField = document.getElementById('base-area');
    const baseTextArea = baseField.value ;
    const base = parseFloat(baseTextArea);
    

    // hight ar kaj

    const hightField = document.getElementById('hight-area');
    const hightTextValue= hightField.value ;
    const hight = parseFloat(hightTextValue);

    // duta gun kora 

    const calculated = 0.5* base * hight;
    
    // console.log(calculated);

    // area ar kaj

    const areaSet = document.getElementById('area');
    areaSet.innerText = calculated ;

    // reacktangle area 

    const widthField = document.getElementById('width-area');
    const widthTextValue = widthField.value ;
    const width = parseFloat(widthTextValue);

    // console.log(width);

    const langthField = document.getElementById('langth-area');
    const langthTaxtValue = langthField.value ;
    const langth = parseFloat(langthTaxtValue);

    // console.log(langth);

    const reacktangleCalculated =  width * langth ;
    const rectangleSet = document.getElementById('area-rectangle') ;
    rectangleSet.innerText = reacktangleCalculated ;

    // 

    const baseNewField = document.getElementById('area-base');
    const baseNewFieldTextVlue = baseNewField.value ;
    const newBase = parseFloat(baseNewFieldTextVlue);
    // console.log(newBase);

    const widthNewField = document.getElementById('area-hight');
    const hightNewFieldTextVlue = widthNewField.value ;
    const newHight = parseFloat(hightNewFieldTextVlue);

    const perallaCalculated = newBase * newHight ;
    const perallaSet = document.getElementById('area-parallelogtam');
    perallaSet.innerText = perallaCalculated ;
    


    

  

}