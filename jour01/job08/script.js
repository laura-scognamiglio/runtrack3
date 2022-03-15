
function sommenombrespremiers(x, y)
{


    // for (var i = 2; i < x && i > Math.sqrt(x); i++) {
    // }
    
    x = true
    y = true

    if (x === 1 || y === 1 )
    {
        console.log("1 n'est pas un nbr premier")

    }
    else if (x > 1 && y > 1 )
    {
        for (i = 2; i < x; i++)
        {
            if(x % i == 0)
            {
                x = false;
                break;
            }
        }
        for (i = 2; i < y; i++)
        {
            if(y % i == 0)
            {
                y = false;
                break;
            }
        }

        add = y + x 

        console.log(add);
        
        return add;
        
    }


   
}

sommenombrespremiers(2, 7)