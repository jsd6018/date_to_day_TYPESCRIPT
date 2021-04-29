//defining a class for export to unit-test file work.ts------------------------------------------------------

export class export_for_testing{

//defining the function to compute the days of the week------------------------------------------------------

get_result(input_values){

    let result={}                                       //to store the results in a dictionary 
    let numbers = new Array(7).fill(null);              //to store the value(can be mean or sum depending on the number of values in input)

    let days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");               //list of days of the week


    //ASSUMPTION ---->>>> INPUT WILL HAVE AT LEAST VALUES FOR 'SUNDAY' AND 'MONDAY'. No exception handling has been specified here to assure the same.

    //computing key-value pairs for the given dates
    //if multiple dates point to the same day of the week, their values are added to obtain the resultant score

    for (let key in input_values) {
        let value = input_values[key];
        let d = new Date(key)
        if(numbers[d.getDay()]!=null)
        numbers[d.getDay()]+=value
        else
        numbers[d.getDay()]=value;
    }

    //computing values for the missing dates in the date range
    //if the predecessor and successor dates have a value, the value of the considered date is the average of the two
    //if successor date is also absent, the value of the considered date is computed the previous 2 predecessors
    
    for (let i=0;i<numbers.length-1;i++)
    {
        if (numbers[i]==null)
        {
            let l = numbers[i-1]
            let r = numbers[i+1]
            if(r!=null)
            {
                numbers[i] = Math.floor((l+r)/2);
            }
            else
            {
                numbers[i] = (numbers[i-1]*2)-numbers[i-2]
            }
        }
        result[days[i]] = numbers[i];
    }
    //if 'SATURDAY' has no value associated with it, the average of 'FRIDAY' and 'SUNDAY' is considered to be the aggregate score

    if(numbers[numbers.length-1]==null)
    {
        numbers[numbers.length-1] = Math.floor((numbers[numbers.length-2]+numbers[0])/2);
    }
    result[days[numbers.length-1]] = numbers[numbers.length-1]
    return result
}
}

//==================================================================================================================================================================
//==================================================================================================================================================================






  