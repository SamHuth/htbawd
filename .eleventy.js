
module.exports = function (eleventyConfig) {

    // Get all pages
    eleventyConfig.addCollection('allPages', function(collection){
        return articlesByDate = collection.getFilteredByGlob("*.md").sort((a,b) => {
            if(a.data.order > b.data.order) return 1;
            if(a.data.order < b.order.order) return -1;
            return 0;
        })
    })

};