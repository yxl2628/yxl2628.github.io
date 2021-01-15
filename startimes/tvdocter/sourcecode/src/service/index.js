import {ottRequest, obj2Url} from '../utils/utils'
import api from '../utils/api'

/**
 * 添加病人
 * @author yang.xiaolong
 * @description 2018-3-14
 * @version     1.0.0
 * @param       {object} payload
 * @param       {function} resolve
 * @param       {function} reject
 * @return      {null}
 */
export const addCase = (payload, resolve, reject) => {
  ottRequest(api.baseUrl + api.addCase + '?' + obj2Url(payload), {}, 'POST', resolve, reject)
}

/**
 * 获取问诊结果
 * @author yang.xiaolong
 * @description 2018-3-14
 * @version     1.0.0
 * @param       {object} payload
 * @param       {function} resolve
 * @param       {function} reject
 * @return      {null}
 */
export const getInquiryRecord = (payload, resolve, reject) => {
  ottRequest(api.baseUrl + api.getInquiryRecord + '?' + obj2Url(payload), {}, 'POST', resolve, reject)
}
