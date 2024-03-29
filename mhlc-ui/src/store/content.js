// Utilities
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export const useContentStore = defineStore('app', () => {
    const menuItems = ref([]);
    const contentPages = ref([]);
    const newsTypes = ref([]);
    const news = ref([]);
    const churchInfo = ref({});
    // const doubleCount = computed(() => count.value * 2);
    async function fetchContent() {
        menuItems.value = await getMenuItems();
        contentPages.value = await getContentPages();
        newsTypes.value = (await axios.get('/api/news-types')).data;
        news.value = (await axios.get('/api/news')).data;
        churchInfo.value = await getChurchInfo();
    }
    return { menuItems, contentPages, newsTypes, news, churchInfo, fetchContent };
});

async function getMenuItems() {
    const menuItems = (await axios.get('/api/menu-items')).data;
    menuItems.sort((a, b) => {
        return a.sequence - b.sequence;
    });
    menuItems.forEach(item => {
        menuItems[item.id] = item;
        item.children = [];
    });
    const menuItemsTree = menuItems.filter(item => !item.parent);
    menuItems.filter(item => item.parent).forEach(child => {
        menuItems[child.parent].children.push(child);
    });
    return menuItemsTree;
}

async function getContentPages() {
    const contentPages = (await axios.get('/api/content-pages')).data;
    contentPages.forEach(page => {
        contentPages[page.contentPath] = page;
    })
    return contentPages;
}

async function getChurchInfo() {
    return (await axios.get('/api/church-info')).data;
}

if (process.env.NODE_ENV === 'development') {

    console.log('NODE_ENV: ', process.env.NODE_ENV);
    console.log('Enabling mock responses');

    // This sets the mock adapter on the default instance
    const mock = new MockAdapter(axios);

    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock.onGet("/api/menu-items").reply(200, [
        {"id":"001","label":"Worship Schedule","sequence":1,"path":"/content/worship-schedule","parent":"004"},
        {"id":"002","label":"Who We Are","sequence":0,"path":"/content/who-we-are","parent":"004"},
        {"id":"003","label":"Home","sequence":0,"path":"/home","parent":null},
        {"id":"004","label":"About Us","sequence":1,"parent":null},
        {"id":"005","label":"News","sequence":2,"path":"/news","parent":null},
        {"id":"006","label":"Getting Involved","sequence":3,"path":"/content/get-involved","parent":null},
        {"id":"007","label":"Preschool","sequence":4,"path":"/content/preschool","parent":null},
        {"id":"008","label":"Contact","sequence":5,"path":"/contact","parent":null},
        {"id":"009","label":"Worship","sequence":0,"path":"/content/worship","parent":"006"},
        {"id":"010","label":"Learn","sequence":1,"path":"/content/learn","parent":"006"},
        {"id":"011","label":"Witness","sequence":2,"path":"/content/witness","parent":"006"},
        {"id":"012","label":"Serve","sequence":3,"path":"/content/serve","parent":"006"},
        {"id":"013","label":"Support","sequence":4,"path":"/content/support","parent":"006"}
    ]);

    mock.onGet("/api/content-pages").reply(200, [
        {"id":"6G8pVnBk3xyY3hfLgZWcx7","title":"Worship Schedule","content":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Come join us at 10:00 AM each Sunday!","nodeType":"text"}],"nodeType":"heading-3"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Faith Formation","nodeType":"text"},{"data":{},"marks":[],"value":" for all ages at 9:00 AM","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Special Worship Opportunities","nodeType":"text"}],"nodeType":"heading-3"},{"data":{},"content":[{"data":{},"marks":[{"type":"italic"}],"value":"(Note: Times listed here are the typical times for each service, but these may be adjusted each year to the needs of the church.  Be sure to check out the news section and our social media for any changes to these services!)","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Advent/Christmas Cantata","nodeType":"text"},{"data":{},"marks":[],"value":" each December","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Christmas Eve Worship","nodeType":"text"},{"data":{},"marks":[],"value":" at 11 AM, 5 PM, 7 PM","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Ash Wednesday Worship ","nodeType":"text"},{"data":{},"marks":[],"value":"at 11 AM and 7 PM","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Lenten Worship ","nodeType":"text"},{"data":{},"marks":[],"value":"Wednesdays in Lent at 7 PM, preceded by supper at 6 PM","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Maundy Thursday Worship","nodeType":"text"},{"data":{},"marks":[],"value":" with Communion at 11 AM and 7 PM","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Good Friday Tenebrae Worship","nodeType":"text"},{"data":{},"marks":[],"value":" at 7 PM","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[{"type":"bold"}],"value":"Easter Sunday Worship ","nodeType":"text"},{"data":{},"marks":[],"value":"at 10:00 AM, preceded by breakfast at 8:30 AM and then flowering of the cross","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"},"contentPath":"/content/worship-schedule"},
        {"id":"4hCjGCwyRiyx0PWFjVt3wc","title":"Who We Are","content":{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"We are…","nodeType":"text"}],"nodeType":"heading-3"},{"data":{},"content":[{"data":{},"marks":[],"value":"…A community of disciples, actively living out faith in God through Jesus Christ.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"…An open and welcoming community which seeks to show God’s Grace to all.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"…Experiencing and Sharing God’s Presence.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"…A Congregation of the Evangelical Lutheran Church in America (ELCA). Please visit ","nodeType":"text"},{"data":{"uri":"http://www.elca.org/"},"content":[{"data":{},"marks":[],"value":"www.elca.org","nodeType":"text"}],"nodeType":"hyperlink"},{"data":{},"marks":[],"value":" to learn more. We share in the vision of the ELCA, confessing that Christians are:","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"+ ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"Claimed ","nodeType":"text"},{"data":{},"marks":[],"value":"by God’s grace for the sake of the world, we are a new creation through God’s living word by the power of the Holy Spirit;","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"+ ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"Gathered","nodeType":"text"},{"data":{},"marks":[],"value":" by God’s grace for the sake of the world, we will live among God’s faithful people, hear God’s word and share Christ’s supper;","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"+ ","nodeType":"text"},{"data":{},"marks":[{"type":"bold"}],"value":"Sent","nodeType":"text"},{"data":{},"marks":[],"value":" by God’s grace for the sake of the world, we will proclaim the good news of God in Christ through word and deed, serve all people following the example of our Lord Jesus, and strive for justice and peace in all the world.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"},"contentPath":"/content/who-we-are"}
    ]);

    mock.onGet('/api/news-types').reply(200, [
        {"id":"2pWRSRQB8VE40PR4Tuncyc","type":"Newsletters"},
        {"id":"5ktejUJ8noonowWZUs0uN7","type":"General"}
    ]);

    mock.onGet('/api/news').reply(200, [
        { "id": "6VBCpIWaAV2Xup88UBzbFh", "datetime": "2024-01-29T00:00", "title": "Youth Bowling Night", "description": { "data": {}, "content": [ { "data": {}, "content": [ { "data": {}, "marks": [], "value": "The youth will be meeting at the church at 3:30 this afternoon to go out for bowling and dinner!  Any youth from 6th - 12th grade are invited!  Come out and join us for an evening of fun!", "nodeType": "text" } ], "nodeType": "paragraph" } ], "nodeType": "document" }, "type": [ { "id": "5ktejUJ8noonowWZUs0uN7", "type": "General" } ] },
        { "id": "JTL0DH2S7XrATtQD5WJGN", "datetime": "2023-11-08T00:00", "title": "Really cool news!", "description": { "data": {}, "content": [ { "data": {}, "content": [ { "data": {}, "marks": [], "value": "This is my first new post!", "nodeType": "text" } ], "nodeType": "paragraph" } ], "nodeType": "document" }, "type": [ { "id": "5ktejUJ8noonowWZUs0uN7", "type": "General" } ] }
    ]);

    mock.onGet('/api/church-info').reply(200, {
        "id": "001",
        "name": "Church Info",
        "streetAddress": "101 East Boundary Street",
        "city": "Chapin",
        "state": "SC",
        "zipCode": "29036",
        "phoneNumber": "803.345.2000",
        "sundaySchoolTime": "9:00 am",
        "sundayWorshipTime": "10:00 am",
        "slogan": "Experiencing & Sharing God's Presence",
        "facebook": "https://www.facebook.com/Mt-Horeb-Lutheran-Church-163197867173867",
        "instagram": "https://www.instagram.com/mhlc_chapin/",
        "youTube": "https://www.youtube.com/@MHLCChapinSC"
    });
}
