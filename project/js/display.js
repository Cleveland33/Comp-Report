function display(aPet){
    //display the number of pets
    document.getElementById("numberPets").innerHTML=`Registered pets: ${salon.pets.length}`;
    //clear the field
    //document.getElementById("pets").innerHTML="";
    //travel the pet's array
    //for(var i=0;i<salon.pets.length;i++){
        // assign a price for each service (TIP: you have to use if)
        //nails -> 15 , shower -> 20, hair ->15, full ->25
        if(aPet.service==="nails"){
            aPet.price=15;
        }else if(aPet.service==="shower"){
            aPet.price=20;
        }else if(aPet.service==="hair"){
            aPet.price=15;
        }else if(aPet.service==="full"){
            aPet.price=25;
        }

        // create a tmp
        
        var tmp=`<div class="pet">
        <h3>${aPet.name}</h3>
        <p> Age: ${aPet.age}</p>
        <p> Gender: ${aPet.gender}</p>
        <p> Breed: ${aPet.breed}</p>
        <p>Service: ${aPet.service}</p>
        <p>Owner: ${aPet.owner}</p>
        <p>Phone: ${aPet.phone}</p>
        <p>$${aPet.price}</p> 
        <button onclick="deletePet(${aPet.id})">Delete</button>
        </div>`;
    // concatenate all the info and display on html
    document.getElementById("pets").innerHTML+=tmp;
    //}
    //document.getElementById("pets").appendChild(tmp);
    profitCalculation();
}
