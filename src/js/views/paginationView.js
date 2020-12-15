import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentEle = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEle.addEventListener('click', function (e) { //event delegation
      const btn = e.target.closest('.btn--inline');
      // console.log(btn);
      if (!btn) {
        return;
      }
      const goto = +btn.dataset.goto;
      // console.log(goto);
      handler(goto);
    });
  }
  _generateMarkup() {
    let curPage = this._data.page;
    const pageNum = Math.ceil(
      this._data.results.length / this._data.numPerPage
    );
    // console.log(pageNum);

    //page 1, there are other page;
    if (curPage === 1 && pageNum > 1) {
      return `<button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    //last page
    if (curPage === pageNum && pageNum > 1) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
    }
    //other page
    if (curPage < pageNum) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
    }
    // only page 1
    return '';
  }

  _generateMarkupButtonA(curPage) {
    return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
  }

  _generateMarkupButtonB(curPage) {
    return `<button class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
  }
}

export default new PaginationView();
