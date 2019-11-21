import { Icon } from 'vant'
import AppScroll from '../components/app-scroll'
import applicationitem from '../components/application-item'
import { NoticeBar } from 'vant'
import { Area } from 'vant'
import { Toast } from 'vant';
import { Popup } from 'vant';
import { Cell, CellGroup } from 'vant';

export default {
  install(Vue){
    // 使用vant的插件
    Vue.use(Icon);
    Vue.use(NoticeBar);
    Vue.use(Area);
    Vue.component(AppScroll.name, AppScroll);
    Vue.component(applicationitem.name,applicationitem);
    Vue.use(Popup);
    Vue.use(Cell).use(CellGroup);
  }
}