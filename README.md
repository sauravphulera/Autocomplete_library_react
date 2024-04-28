### React AutoComplete.
This is a autocomplete in react, it contaions a number of basic and advance features of react including useCallBack(), abortController and Custom Hoooks.

<img width="1000" alt="Screenshot 2024-04-28 at 9 56 13 PM" src="https://github.com/sauravphulera/Autocomplete_library_react/assets/16851666/79bd6c47-1d40-41bb-abfd-3adfcd5a9aa3">


## Search box component options
    id : Input Element Id
    name:  Name for input element
    label= Label for your search box
    placeHolder:  "Enter fav character etc"
    autoComplete:  Should enable feature or not
    maxItems: Max items that can be displayed
    styles:   This is an object as shown below  
              {{
                label: "Classname for label",
                input: "Class name for input",
              }}
    debounceWait: Debounce time for api calls.
    listBox: Function returns list item template and takes ListItems as param.
              For example: listbox =  {(items, activeIndex) => <ListBox  items={items} activeIndex={activeIndex}/>}
    noItemMessage: template for error message
    errorMessage: template for error message
    transformData: function to transform data from api.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

