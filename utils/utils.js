/**
 * 函数节流（执行第一次进入定时器中的函数）
 * @param func 执行函数
 * @param wait 间隔时间
 * @param options 立即执行
 * options中  leading：false 表示禁用第一次执行 trailing: false 表示禁用停止触发的回调
 */
function throttle (fn, wait = 500, options = {}) {
  let timer = null
  let previous = 0
  const throttled = function () {
    const now = +new Date()
    // remaining 不触发下一次函数的剩余时间
    if (!previous && options.leading === false) previous = now
    const remaining = wait - (now - previous)
    if (remaining < 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      fn.apply(this, arguments)
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        previous = options.leading === false ? 0 : new Date().getTime()
        timer = null
        fn.apply(this, arguments)
      }, remaining)
    }
  }
  return throttled
}

/**
 * 函数防抖（执行最后一次进入定时器中的函数）
 * @param func 执行函数
 * @param wait 间隔时间
 * @param immediate 立即执行
 */
function debounce (fn, wait = 500, immediate) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) {
        fn.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
  }
}
/**
 * 获取用户身份证信息
 * @param idCard 用户身份证号码
 * @returns {userInfo}
 */
function getIdCardInfo (idCard) {
  const info = {
    sex: '',
    age: 0,
    birthday: ''
  }
  // 用正则表达式检查身份证号码是否有误！
  const isIdcard = /^\d{6}(((19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}([0-9]|x|X))|(\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{3}))$/
  if (!isIdcard.test(idCard)) {
    return new Error('请输入正确的身份证信息')
  }
  // idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14);
  // 获取性别
  if (parseInt(idCard.substr(16, 1)) % 2 === 1) {
    info.sex = '男'
  } else {
    info.sex = '女'
  }
  // 获取年龄
  const myDate = new Date()
  const mYear = myDate.getFullYear()

  // 判断出生日期
  if (idCard.length === 15) {
    const year =
      idCard.substring(6, 8) +
      '-' +
      idCard.substring(8, 10) +
      '-' +
      idCard.substring(10, 12)
    info.birthday = year
    info.age = mYear - parseInt(idCard.substring(6, 8))
  }

  if (idCard.length === 18) {
    const year =
      idCard.substring(6, 10) +
      '-' +
      idCard.substring(10, 12) +
      '-' +
      idCard.substring(12, 14)
    info.birthday = year
    info.age = mYear - parseInt(idCard.substring(6, 10))
  }
  return info
}

/** @dateTimeFliter 转换格林日期时间格式为常用日期格式
 * @time[必填] 						Date  		格林日期格式
 * @part[可选,默认:0]				Number      选择返回日期时间部分  列:0:返回所有 1:只返回日期  2:只返回时间
 * @dateComplete[可选,默认:true] 	Boolean 	日期位数不足是否添0补齐:true:补齐,false:不补齐
 * @timeComplete[可选,默认:true] 	Boolean 	时间位数不足是否添0补齐:true:补齐,false:不补齐
 * @dateConnector[可选,默认:-] 		String 		年月日连接符  例: - : /
 * @timeConnector[可选,默认::] 		String 		时间连接符   例: - : /
 * @hour12[可选,默认:false]          Boolean     是否返回12小时制时间   例: true:返回12小时制时间   false:返回24小时制时间
 * @return   '2019-11-25 15:05:54'  String    返回示例
 * **/
function dateTimeFliter (
  time,
  part = 0,
  dateComplete = true,
  timeComplete = true,
  dateConnector = '-',
  timeConnector = ':',
  hour12 = false
) {
  const year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  let hour = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()
  let dateStr = ''
  let timeStr = ''
  // 转换日期
  if (dateComplete) {
    // 添0补齐
    if (month < 10) {
      month = '0' + month
    }
    if (day < 10) {
      day = '0' + day
    }
  }
  dateStr = year + dateConnector + month + dateConnector + day
  // 转换时间
  // 修改小时制
  if (hour12) {
    if (hour > 12) {
      hour = hour - 12
      if (timeComplete) {
        if (hour < 10) {
          hour = '下午 ' + '0' + hour
        } else {
          hour = '下午 ' + hour
        }
      }
    } else {
      if (timeComplete) {
        if (hour < 10) {
          hour = '上午 ' + '0' + hour
        } else {
          hour = '上午 ' + hour
        }
      }
    }
  }
  // 判断分钟与秒
  if (timeComplete) {
    // 添0补齐
    if (minute < 10) {
      minute = '0' + minute
    }
    if (second < 10) {
      second = '0' + second
    }
  }
  timeStr = hour + timeConnector + minute + timeConnector + second
  // 合成输出值
  if (part === 0) {
    return dateStr + ' ' + timeStr
  } else if (part === 1) {
    return dateStr
  } else if (part === 2) {
    return timeStr
  }
  return '传参有误'
}

/** @getType 判断数据类型
 * @object[必填]    需要判断类型元素
 * @return   string/boolean/number...    返回示例
 * **/
function getType (object) {
  let result = null
  return ((result = typeof (object)) === 'object' ? object === null && 'null' ||
    Object.prototype.toString.call(object).slice(8, -1) : result)
    .toLowerCase()
}

/** @dateSurplus 计算开始时间到结束时间的时长
 * @startTime[必填]     Date      格林日期格式
 * @endTime[必填]     Date      格林日期格式
 * @format[可选,默认：s]
 * @return   '800'  String    返回示例
 * **/
function dateSurplus (startTime, endTime = '0', format = '秒') {
  const start = new Date(startTime).getTime() / 1000
  let end = 0
  if (endTime) {
    end = new Date(endTime)
  } else {
    end = start + 86400
  }
  return end - start
}

/*
* @flatten 数组扁平化
* @param arr 需要拍平的数组
* @return Array 返回拍平后的数组
* */
function flatten (arr) {
  let result = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
/*
* @unique 数组去重
* @param arr 需要拍平的数组
* @return Array 返回拍平后的数组
* */
function unique (arr) {
  const appeard = new Set()
  return arr.filter(item => {
    // 创建一个可以唯一标识对象的字符串id
    const id = item + JSON.stringify(item)
    if (appeard.has(id)) {
      return false
    } else {
      appeard.add(id)
      return true
    }
  })
}

/**
 * 时间戳转指定格式时间
 * @param {string} 时间分隔符,如':'
 * @param {num} 时间戳
 * @param {string} 格式:hms,有h返回小时,有m返回时间,有s返回秒
 */
const timestampFormat = (t, f, format) => {
  var jsdate = t ? new Date(t * 1000) : new Date();
  var pad = function (n, c) {
    if ((n = n + '').length < c) {
      return new Array(++c - n.length).join('0') + n;
    } else {
      return n;
    }
  };
  var hours = pad(jsdate.getHours(), 2);
  var mins = pad(jsdate.getMinutes(), 2);
  var secs = pad(jsdate.getSeconds(), 2);
  switch (format) {
    case 'hms':
      return hours + f + mins + f + secs;
    case 'hm':
      return hours + f + mins;
    case 'ms':
      return parseInt(hours) * 60 + parseInt(mins) + f + secs;
  }
};
/**
 * 返回各种格式时间
 * @param date：DateTime对象
 * @param fmt   时间格式
 * @returns {}格式化后的时间字符串
 */
const formatDate = (date, fmt) => {
  var date = new Date(parseInt(date) * 1000);
  if (fmt == 'yyMMddhhmmss') {
    var nYear = date.getFullYear(),
      nMonth = date.getMonth() + 1,
      nDay = date.getDate(),
      nHours = date.getHours(), //小时
      nMinutes = date.getMinutes(), //分
      nSeconds = date.getSeconds();

    nMonth = (nMonth < 10 ? '0' + nMonth : nMonth).toString();
    nDay = (nDay < 10 ? '0' + nDay : nDay).toString();
    nHours = (nHours < 10 ? '0' + nHours : nHours).toString();
    nMinutes = (nMinutes < 10 ? '0' + nMinutes : nMinutes).toString();

    //return nYear + nMonth + nDay + nHours + nMinutes;
    return nYear + nMonth + nDay + '_' + nHours + nMinutes;
  } else if (fmt == 'yyyyMMdd_hhmm') {
    var nYear = date.getFullYear(),
      nMonth = date.getMonth() + 1,
      nDay = date.getDate(),
      nHours = date.getHours(), //小时
      nMinutes = date.getMinutes(), //分
      nSeconds = date.getSeconds();

    nMonth = (nMonth < 10 ? '0' + nMonth : nMonth).toString();
    nDay = (nDay < 10 ? '0' + nDay : nDay).toString();
    nHours = (nHours < 10 ? '0' + nHours : nHours).toString();
    nMinutes = (nMinutes < 10 ? '0' + nMinutes : nMinutes).toString();

    return nYear + nMonth + nDay + '_' + nHours + nMinutes;
  } else {
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds(), //毫秒
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
};
/**
 * 返回周
 * @returns {}格式化后的时间字符串
 */
const getWeek = (days) => {
  let week
  switch (days) {
    case 1:
      week = '周一'
      break
    case 2:
      week = '周二'
      break
    case 3:
      week = '周三'
      break
    case 4:
      week = '周四'
      break
    case 5:
      week = '周五'
      break
    case 6:
      week = '周六'
      break
    case 0:
      week = '周日'
      break
  }
  return week
};
/**
 * 获取七天后的星期，日期
 * @param date：DateTime对象
 * @param fmt   时间格式
 * @returns {}格式化后的时间字符串
 */
const formatWeekInfo = () => {
  const today = new Date()
  const nextDay = new Date(today)
  const info = []
  for (let index = 0; index < 7; index++) {
    const infoChild = {}
    nextDay.setDate(today.getDate() + index)
    //获取星期
    const week = getWeek(nextDay.getDay())
    const isToday = getWeek(today.getDay())
    infoChild.week = isToday == week ? '今天' : week
    //获取日期
    infoChild.time = nextDay.getDate()
    //获取具体日期
    infoChild.infoTime =
      nextDay.getFullYear() +
      '-' +
      (nextDay.getMonth() + 1) +
      '-' +
      nextDay.getDate()
    infoChild.id = index
    info.push(infoChild)
  }
  return info
};

module.exports = {
  throttle,
  debounce,
  getType,
  getIdCardInfo,
  dateTimeFliter,
  dateSurplus,
  flatten, // 数组拍平
  unique, // 数组去重复
  formatDate,
  timestampFormat,
  formatWeekInfo
}
