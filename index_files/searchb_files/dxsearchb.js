var actionArr = ["http://www.blyun.com/gosearch.jsp"]
var channelIndex = 2;//默认频道 下标从0开始

$(function() {
		   
	//初始化
	$("#dxSearchForm").attr("action", actionArr[0]);
	$("#SearchChannelUL li").eq(channelIndex).addClass("on").siblings().removeClass("on");
	$("#FieldInfo").html(fieldArr[channelIndex]);
   	SetChannel(channelIndex, 0);
	//初始化结束
			
	$("#dxSearchForm").submit( function () {
	  return checkSearch();
	} ); 
	
	//中文搜索
    $("#ch_search").click(function() {
        indexsearch('ch');
    });
	
	//外文搜索
    $("#en_search").click(function() {
        indexsearch('en');
    });

	//频道切换
    $("#SearchChannelUL li").each(function(i) {
        $(this).click(function() {
            $(this).addClass("on").siblings().removeClass("on");
            $("#FieldInfo").html(fieldArr[i]);
            SetChannel(i, 0);
            channelIndex = i;
        });
    });

});

//提交验证
function checkSearch() {
    var sw = $.trim($("#searchSw").val());
    if (sw == "") {
        alert("请输入搜索词");
        return false;
    }
    return true;
}

//搜索
function indexsearch(lan) {
	if(checkSearch())
	{
		if (lan == "ch") SetChannel(channelIndex, 0);
		else SetChannel(channelIndex, 1);
		$("#dxSearchForm").submit();
	}
}

//设置channel、action
function SetChannel(i, isEn) {
    var cn = cnChannel[i];
    var en = enChannel[i];
    if (en == "") {
        $("#en_search").attr("disabled", "true");
    } else {
        $("#en_search").removeAttr("disabled");
    }
    var channel = "search";

    if (isEn == 0) channel = cn;
    else channel = en;

    $("#searchChannel").val(channel);
}

var FieldAll = "";
var FieldBook = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1'/>&nbsp;书名&nbsp;" + "<input type='radio' name='Field' value='2'/>&nbsp;作者&nbsp;";
var FieldJour = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1'/>&nbsp;标题&nbsp;" + "<input type='radio' name='Field' value='2'/>&nbsp;作者&nbsp;" + "<input type='radio' name='Field' value='3'/>&nbsp;刊名&nbsp;" + "<input type='radio' name='Field' value='4'/>&nbsp;关键词&nbsp;";
var FieldNP = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1'/>&nbsp;标题&nbsp;" + "<input type='radio' name='Field' value='2'/>&nbsp;作者&nbsp;" + "<input type='radio' name='Field' value='3'/>&nbsp;来源&nbsp;" + "<input type='radio' name='Field' value='4'/>&nbsp;全文&nbsp;";
var FieldThesis = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1'/>&nbsp;标题&nbsp;" + "<input type='radio' name='Field' value='2'/>&nbsp;作者&nbsp;" + "<input type='radio' name='Field' value='4'/>&nbsp;授予单位&nbsp;" + "<input type='radio' name='Field' value='3'/>&nbsp;关键词&nbsp;";
var FieldCP = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1' />&nbsp;标题&nbsp;" + "<input type='radio' name='Field' value='2' />&nbsp;作者&nbsp;" + "<input type='radio' name='Field' value='3' />&nbsp;关键词&nbsp;" + "<input type='radio' name='Field' value='4' />&nbsp;会议名称&nbsp;";
var FieldPatent = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1' />&nbsp;专利名称&nbsp;" + "<input type='radio' name='Field' value='2' />&nbsp;申请号&nbsp;" + "<input type='radio' name='Field' value='3' />&nbsp;发明人&nbsp;" + "<input type='radio' name='Field' value='4' />&nbsp;IPC号&nbsp;";
var FieldStd = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1' />&nbsp;标准号&nbsp;" + "<input type='radio' name='Field' value='2' />&nbsp;标准中文名&nbsp;" + "<input type='radio' name='Field' value='3' />&nbsp;标准英文名&nbsp;";
var FieldVideo = "<input type='radio' name='Field' value='all' checked='checked'/>&nbsp;全部&nbsp;" + "<input type='radio' name='Field' value='1' />&nbsp;视频名称&nbsp;" + "<input type='radio' name='Field' value='2' />&nbsp;简介&nbsp;" + "<input type='radio' name='Field' value='3' />&nbsp;字幕&nbsp;" + "<input type='radio' name='Field' value='4' />&nbsp;主题词&nbsp;";

//报纸和视频没有外文搜索
var cnChannel = ["searchMix", "search", "searchJour", "searchNP", "searchThesis", "searchCP", "searchPatent", "searchStd", "searchVideo"];
var enChannel = ["searchFMix", "searchFBook", "searchFJour", "", "searchFThesis", "searchFCP", "searchFPatent", "searchFStd", ""];
var fieldArr = [FieldAll, FieldBook, FieldJour, FieldNP, FieldThesis, FieldCP, FieldPatent, FieldStd, FieldVideo]

