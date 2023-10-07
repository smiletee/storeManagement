async function oninitHonePage() {
    console.log('--homw page---')
    $("#includeHtml").load("wellcome.html");

}

async function oncilckNavMenu(this_){
    console.log('oncilckNavMenu => ', this_.id)
    $("#includeHtml").load(this_.id);

}

