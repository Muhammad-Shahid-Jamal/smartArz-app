import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-comp',
  templateUrl: './pagination-comp.component.html',
  styleUrls: ['./pagination-comp.component.scss']
})
export class PaginationCompComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log($);
    // $('#pagination-container').pagination({
    //     dataSource: ['1','2','3','4','5','6','7','9','10','11','12','13'],
    //     totalNumber: 50,
    //     pageSize: 2,
    //     showPageNumbers: true,
    //     showPrevious: true,
    //     showNext: true,
    //     showFirstOnEllipsisShow: true,
    //     showLastOnEllipsisShow: true,
    //     prevText: this.get_arrows_svg("left"),
    //     nextText: this.get_arrows_svg("right"),
    //     callback: function (resp,pageNumber) {
    //         console.log(pageNumber);
    //     }
    // });
  }

  get_arrows_svg(direction:string):string{
    if(typeof direction === "string"){
        let className = direction === "right" ? "_right_pag_arrow" :"_left_pag_arrow";
        return(`
                <span class="_page_nav_control">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.879 10.764" class="${className}">
                        <g id="down_arrow" transform="translate(-568.459 -1752.461)">
                            <path id="Path_18" data-name="Path 18" d="M587.339,1753.967a2.835,2.835,0,0,1-.43.751q-4.018,4.058-8.072,8.081a1.278,1.278,0,0,1-1.977-.091q-3.4-3.392-6.791-6.789c-.339-.339-.679-.677-1.016-1.018-.715-.722-.786-1.443-.2-2.036s1.325-.532,2.036.178q3.219,3.212,6.432,6.43c.12.12.248.232.358.36.16.186.288.158.45-.008.482-.5.976-.979,1.464-1.467q2.693-2.692,5.384-5.385a1.335,1.335,0,0,1,1.446-.435A1.441,1.441,0,0,1,587.339,1753.967Z" transform="translate(0)"/>
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.879 10.764" class="${className}">
                        <g id="down_arrow" transform="translate(-568.459 -1752.461)">
                            <path id="Path_18" data-name="Path 18" d="M587.339,1753.967a2.835,2.835,0,0,1-.43.751q-4.018,4.058-8.072,8.081a1.278,1.278,0,0,1-1.977-.091q-3.4-3.392-6.791-6.789c-.339-.339-.679-.677-1.016-1.018-.715-.722-.786-1.443-.2-2.036s1.325-.532,2.036.178q3.219,3.212,6.432,6.43c.12.12.248.232.358.36.16.186.288.158.45-.008.482-.5.976-.979,1.464-1.467q2.693-2.692,5.384-5.385a1.335,1.335,0,0,1,1.446-.435A1.441,1.441,0,0,1,587.339,1753.967Z" transform="translate(0)"/>
                        </g>
                    </svg>
                </span>
            `);
    }else{
        throw new Error("string type required");
    }
}

}
