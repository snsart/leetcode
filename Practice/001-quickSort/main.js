 let quickSort=function(arr,start,end){
   
    if(start<end){
        let partion=getPartion(arr,start,end);
        quickSort(arr,start,partion-1);
        quickSort(arr,partion+1,end);
    }

 }

 function getPartion(arr,start,end){
    let p=arr[end];
    let i=start,j=start;
    while(j<end){
        if(arr[j]<p){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
            j++;
        }else{
            j++;
        }
    }
    [arr[i],arr[end]]=[arr[end],arr[i]];

    return i;
 }

 let arr=[3,5,4,2,1,6,5,4,1,29,12,5];
 quickSort(arr,0,arr.length-1);
 console.log(arr);