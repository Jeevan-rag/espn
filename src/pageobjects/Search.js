class Search {

    SearchIcon(){
        return $(".search");
    }
    SearchInput(){
        return $('//*[@id="global-search"]/input[1]');
    }
}
export default new Search();