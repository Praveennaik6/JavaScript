let username="praveen"
let userrole="admin"

function checkaccess(){
    hasaccess=false

    /// '===' it used for strict equility(type,name, value)
    if(userrole==="admin"){

        let welmessage=`${username} has all access to the account`
        hasaccess=true
        console.log(welmessage)
    } 
    console.log("hasaccess", hasaccess)
}

checkaccess()