var resultElement = document.getElementById('result');
var clone = ''
var memory = ''
function add(element){
    clone += element;
    resultElement.value = clone
    }
function clearall(){
    resultElement.value = ''
    clone = ''
    }
function del(){
    clone = clone.slice(0,-1);
    resultElement.value = clone
        }
function calculate() {
    var displayValue =  document.getElementById('result').value;
    if (displayValue.includes('√')){
        console.log('aaa')
        if (displayValue !== ''&& displayValue!=='Error'){
            try{
                var modifiedExpression = displayValue.replace(/√/g,'Math.sqrt(')+')';
                var result = eval(modifiedExpression);
                document.getElementById('result').value=result;
            }
            catch(error){
                document.getElementById('result').value = result;
            }
        }
    }
    else{
        try{
            let lastresult = eval(displayValue);
            document.getElementById('result').value = lastresult;
        }
        catch (error) {
            window.alert('Error');
        }
        
    }
    
    } 
    
function mmsave(){
    if (resultElement.value != 'Error'&&resultElement.value != '0'&&resultElement.value != ''){
        memory = resultElement.value
        window.alert('SAVED VALUE')
    }
    else{
        window.alert('CANT SAVE VALUE')
    }
}
function mmrecall(){
    if (memory != ''){
    clone += memory;
    resultElement.value=clone
    }
    else{
        window.alert('CANT RECALL VALUE')
    }
}
