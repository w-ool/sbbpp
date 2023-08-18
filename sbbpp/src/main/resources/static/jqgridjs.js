function makeTable(id, array){
     $("#"+id).jqGrid({
            datatype: "local",
            height: 250,
            width : 630,
            colNames:['일시','속도', 'RPM', '브레이크','상태'],
            colModel:[
                {name:'fOcurDtmc', align:'right'},
                {name:'spd', align:'right'},
                {name:'rpm', align:'right'},
                {name:'brkYn', align:'right'},
                {name:'status', align:'right'}
            ],
            caption: "DTG 데이터"
      });

      for(var I in array){
           $("#"+id).jqGrid('addRowData',i+1,array[i]);
      }
}

makeTable('table1', dataArray);