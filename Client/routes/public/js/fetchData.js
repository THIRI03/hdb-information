//Name: Thiri Lae Win
//Class: DIT/1B/10
//Admin No: 2340739
export async function fetchData(){
    const response = await fetch("http://localhost:8081/allhdbdata");
    const hdbArray = await response.json();
    return hdbArray;
}