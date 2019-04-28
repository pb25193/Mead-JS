import {getNotes, createNote, removeNote, updateNote} from './notes';
import {getFilters, setFilters} from './filters';

console.log('index.js')

// console.log(getNotes());
// createNote();

// removeNote("dce0e324-f2bb-4b19-ae28-49a54d380312");

// updateNote("27874c03-2f9b-43c3-b57c-4d53c5be03d0", {title: 'gaali', body: 'le na mu me'});

console.log(getFilters());

setFilters({
    searchText: 'office'
});

console.log(getFilters());

console.log(getNotes());