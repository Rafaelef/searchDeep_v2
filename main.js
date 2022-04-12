

// function searchWith (arr, filter) {
//     const lCaseFilter = filter.toString().toLowerCase();
//     const strLen = lCaseFilter.length;
//     const minLength = 2;

//     const filtered = [];

//     const isObject = val => {
//         return val instanceof Object;
//     }
//     const isArr = val => {
//         return Array.isArray(val);
//     }
//     const objectHandler = (obj) => {
//         const vals = Object.values(obj);
        
//         vals.filter((val) => {
//             const valText = val.toString().toLowerCase();

//             if (isArr(val)) return arrayHandler(val)

//             if (valText.includes(lCaseFilter)) {
//                 if(filtered.includes(obj)) return;
//                 filtered.push(obj);
//             }
//         })
//     }
//     const arrayHandler = (arr) => {
//         arr.filter((el) => {
//             if (isObject(el)) return objectHandler(el);

//             const elText = el.toString().toLowerCase();
//             if (elText.includes(lCaseFilter)) {
//                 if(filtered.includes(el)) return;
//                 filtered.push(el);
//             }
            
//         })
//     }
//     const isLongEnough = (stringLength, minLen) => {
//         if (stringLength < minLen) return false;
//         else return true;
//     }

//     if (!isLongEnough(strLen, minLength)){
//         console.log('too short');
//         return;
//     }
//     arrayHandler(data);

//     console.log(filtered);
// }


const minFilterTextLength = 2;
const checkIfHasGivenLength = (obj, minLen) => obj.toString().length >= minLen;
const checkIfTypeIsSimple = (obj) => typeof obj !== 'object';
const checkIfTypeIsArray = (obj) => Array.isArray(obj);
const checkIfTypeIsObject = (obj) => typeof obj === 'object';
const convertToString = (obj) => obj += "";
const checkIfIsSearchedValue = (obj, filter) => convertToString(obj).includes(convertToString(filter));
const getObjectValues = (obj) => Object.values(obj);



// RN only main objects in main array get filtered, if type of value !simple it doesn't work



const objectHandler = (obj, filter) => {
    const vals = getObjectValues(obj);
    vals.forEach((val) =>{
        if(checkIfTypeIsSimple(val) && checkIfIsSearchedValue(val, filter)) console.log(obj);
        if(checkIfTypeIsArray(val)) {
            return filterWith(val, filter);
        }

        if(checkIfTypeIsObject(val)) return filterWith(val, filter);
    })
}

const filterWith = (data, filter) => {
    if(!checkIfHasGivenLength(filter, minFilterTextLength)) {
        return console.log("too short");
    }

    if (checkIfTypeIsSimple(data) && checkIfIsSearchedValue(data)) console.log(data);

    if (checkIfTypeIsArray(data)) {
        return data.forEach((el) => filterWith(el, filter)) 
    }

    if (checkIfTypeIsObject(data)) {
        objectHandler(data, filter);
    }
}





const data = [
    {
        "_id": "5e985a07feddae7617ac44f6",
        "age": 24,
        "eyeColor": "brown",
        "name": "Cummings Baxter",
        "gender": "male",
        "company": "VELOS",
        "email": "cummingsbaxter@velos.com",
        "phone": "+1 (907) 482-2451",
        "tags": [
            "labore",
            "elit",
            "excepteur",
            "nisi",
            "mollit",
            "anim",
            "aliquip"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Sheppard Jensen"
            }
        ]
    },
    {
        "_id": "5e985a0709dfa1e6fd93c6ad",
        "age": 32,
        "eyeColor": "brown",
        "name": "Madelyn Dickson",
        "gender": "female",
        "company": "KENGEN",
        "email": "madelyndickson@kengen.com",
        "phone": "+1 (984) 521-2439",
        "tags": [
            "nisi",
            "veniam",
            "dolore",
            "officia",
            "ex",
            "non",
            "pariatur"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Bruce Barton"
            },
            {
                "id": 1,
                "name": "Juliet Schmidt"
            },
            {
                "id": 2,
                "name": "Horton Haley"
            },
            {
                "id": 3,
                "name": "Herminia Witt"
            }
        ]
    },
    {
        "_id": "5e985a0737e2306e9aef6ecd",
        "age": 26,
        "eyeColor": "blue",
        "name": "Mcguire Mercado",
        "gender": "male",
        "company": "LINGOAGE",
        "email": "mcguiremercado@lingoage.com",
        "phone": "+1 (963) 450-2194",
        "tags": [
            "cupidatat",
            "occaecat",
            "amet",
            "qui",
            "elit",
            "esse",
            "deserunt"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Loraine Harper"
            },
            {
                "id": 1,
                "name": "Luann Randall"
            },
            {
                "id": 2,
                "name": "Obrien Rich"
            },
            {
                "id": 3,
                "name": "Noble Wilkerson"
            }
        ]
    },
    {
        "_id": "5e985a07148cfba58c860ec2",
        "age": 26,
        "eyeColor": "brown",
        "name": "Marina Porter",
        "gender": "female",
        "company": "GORGANIC",
        "email": "marinaporter@gorganic.com",
        "phone": "+1 (867) 417-3497",
        "tags": [
            "laborum",
            "aliquip",
            "sit",
            "adipisicing",
            "aute",
            "cupidatat",
            "aliquip"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Blair Hill"
            },
            {
                "id": 1,
                "name": "Ebony Jimenez"
            }
        ]
    },
    {
        "_id": "5e985a074984f9f08ccaaa4c",
        "age": 25,
        "eyeColor": "green",
        "name": "Barlow Ferguson",
        "gender": "male",
        "company": "TOYLETRY",
        "email": "barlowferguson@toyletry.com",
        "phone": "+1 (837) 484-2231",
        "tags": [
            "est",
            "dolor",
            "minim",
            "ut",
            "anim",
            "culpa",
            "non"
        ],
        "friends": [
            {
                "id": 0,
                "name": "Delacruz Acevedo"
            },
            {
                "id": 1,
                "name": "Gloria Tanner"
            },
            {
                "id": 2,
                "name": "Cantrell Myers"
            },
            {
                "id": 3,
                "name": "Fisher Leonard"
            }
        ]
    }
]

filterWith(data, "barl");
