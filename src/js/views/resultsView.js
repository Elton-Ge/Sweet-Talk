import View from './View.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentEle = document.querySelector('.results');
  _errorMsg = 'No recipes found for your query. Please try again.';
  _successMsg = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join(''); //等价于map(result=> this._generateMarkupPreview(result))
  }
}

export default new ResultsView();
