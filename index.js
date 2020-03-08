let creation_date_el = document.querySelector("#creation_date")
let journal_entry_el = document.querySelector("#journal_entry")
let submit_entry_button_el = document.querySelector("#submit_entry")
let confidence_level_el = document.querySelector("#confidence_level")
let journal_entry_object = {} // !! no need to define and empty object since you will update this value (works differently than an array which you can add values to without rewriting the previous values aka push)


let mySubmit = (evt) => 
{
    // !! watch out for line terminators 
    evt.preventDefault()
    journal_entry_object = 
    {
        creation_date: creation_date_el.value,
        journal_entry: journal_entry_el.value,
        confidence_level: confidence_level_el.value

    }
    // !! right here you should be pushing this object to an array 
    console.log(`Created on ${journal_entry_object.creation_date}
                 Journal Entry ${journal_entry_object.journal_entry},
                 Confidence level: ${journal_entry_object.confidence_level}`)

                                 
}

// - After each submission
//     - Add the entry to the `journalEntries` array
//     - Use a function that you implement to iterate the list of entries, and using template literals, render all of the entries in the DOM

let journal_entry_capture = journal_entry_object

const journalEntriesArray = [
    // !! why are you populating this array with random data not entered by the data (don't just copy from the README)
    {
        creation_date: journal_entry_capture.creation_date,
        journal_entry: journal_entry_capture.journal_entry,
        confidence_level: journal_entry_capture.confidence_level
    }
    ];
    function collect_data(){
        // !! the element selection should not be inside of a function
        creation_date_el = document.querySelector("#creation_date").value
    }
    console.log(creation_date_el.value)
    // ! this should happen inside of a function
    journalEntriesArray.push(journal_entry_capture)
    // !! you should be iterating through this array
console.log(journalEntriesArray[0])

submit_entry_button_el.addEventListener("click", mySubmit)