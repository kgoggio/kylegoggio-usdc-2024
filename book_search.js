function findSearchTermInBooks(searchTerm, scannedTextObj) {
    let result = {
        "SearchTerm": searchTerm,
        "Results": []
    }; 

    scannedTextObj.forEach(book => {
        //starts a for Each Loop
        let found = false;


        book.Content.forEach(content => {
            // Check if the search term is in the text and not already found
            if (!found && content.Text.includes(searchTerm)) {
                // Set found to true after the first occurrence
                found = true;


                result.Results.push({
                    "ISBN": book.ISBN,
                    "Page": content.Page,
                    "Line": content.Line
                });
            }
        });
    });

    return result;
}


const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }, 
            {
                "Page": 41,
                "Line": 11,
                "Text": "tHe creature, was coming. what were we going to do?"
            }
    ]
    }
    
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut2 = {
    "SearchTerm": "tHe",
    "Results": [
                {
            "ISBN": "9780000528531",
            "Page": 41,
            "Line": 11
        }
    ]
}

const twentyLeaguesOut3 = {
    "SearchTerm": "blue",
    "Results": [] 
}

const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

//tests irregular letter capitalization; ensures that it will correctly find it
const test3result = findSearchTermInBooks("tHe", twentyLeaguesIn); 
if (test3result.Results.length == 1) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2.Results.length);
    console.log("Received:", test3result.Results.length);
}

//tests to ensure that in the event that a search term that doesn't exist within the input item, nothing is generated, except for the search term and an empty results variable
const test4result = findSearchTermInBooks("blue", twentyLeaguesIn); 
if (test3result.Results.length == 1) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut3.Results.length);
    console.log("Received:", test4result.Results.length);
}


