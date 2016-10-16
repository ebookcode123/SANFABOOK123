/**
 * Created by leizha on 10/14/16.
 */
//var OB = angular.module("Template",['ngRoute']);
var OB = angular.module("myAPP",[]);

//app.config(['routeProvider',function($routeProvider){
//    $routeProvider.when('')
//}]);

OB.controller("navRepeat",function ($scope) {

    $scope.navOB = [
        {   'name':"Introduction",
            'JSON':[]
        },
        {
            'name':"引言",
            'JSON':[]
        },
        {   'name':"Top100高频算法训练营",
            'JSON':["试听课","公开课第一节","公开课第二节","公开课第三节","公开课第四节"]
        },
        {   'name':"如何学习算法设计",
            'JSON':["学习计划","生长学习法"],
            'JSON2':["7天怎么学","30天怎么学","100天怎么学"],
            'JSON3':["一个指导思想","3+1模版"]
        },
        {   'name':"数据结构",
            'JSON':["Linear","Tree","Graph","Big Data"],
            'JSON2':["Array","List","Queue","Stack","Hash"],
            'JSON3':["Binary Tree", "Binary Search Tree","Heap","Trie","Segment Tree","Binary Index Tree"],
            'JSON4':["Matrix", "Neighbor"]
        },
        {
            'name':"算法结构",
            'JSON':["Iteration","Recursion","Search","Dynamic Programming","Greedy","Divide and Conquer","System Design","Math"],
            'JSON2':["Depth First Search","Breadth First Search","A*Search"],
            'JSON3':["Game"],
            'JSON4':["Bit","Probability","Equation"]
        },

        {
            'name':"高频题目列表",
            'JSON':[
                "1.快乐数字","2.忧郁数字","3.翻转链表","4.翻转有向图","5.平方求和",
                "6.立方求和", "7.二叉树垂直遍历", "8.三叉树垂直遍历", "9.两个元素的和",
                "10.三个元素的和", "11.四个元素的和","12.取硬币", "13.取硬币II", "14.模版匹配",
                "15.模版匹配II","16.字符串变换", "17.字符串变换II", "18.偷金子", "19.偷金子II",
                "20.偷金子III", "21.偷金子IV", "22.会议室", "23.会议室2", "24.寻找字符串",
                "25.安排课程", "26.安排课程II", "27.部分求和", "28.部分求和II", "29.朋友圈",
                "30.朋友圈II", "31.设计贪吃蛇", "32.随机数生成器", "33.统治者","34.统治者II",
                "35.拆链表", "36.寻找环", "37.计算器", "38.计算器II", "39.看山", "40.栈排序",
                "41.沙漠之旅", "42.沙漠之旅II", "43.二进制生成器","44.高效KQ","45.速配","46.旅程安排",
                "47.旅程安排2", "48.二叉树直径", "49.克隆二叉树", "50.克隆二叉树II", "51.树的宽度",
                "52.验证heap", "53.TopK", "54. 排序二叉搜索树", "55. 走迷宫", "56.走迷宫II",
                "57.斐波那契数列", "58.设计RateLimiter", "59.设计Twitter", "60.数组去重", "61.数组去重II",
                "62.设计LRU Cache", "63.公共祖先", "64.树的三种遍历", "65.寻找k", "66.验证heap","67.树的三种遍历II",
                "68.克隆图", "69.质因数", "70.组合数"
            ]
        },
        {
            'name':"解题报告",
            'JSON':[
                "1.快乐数字解题报告",
                "3.翻转链表解题报告",
                "5.平方求和解题报告",
                "6.立方求和解题报告",
                "7.二叉树垂直遍历解题报告",
                "18.偷金子解题报告",
                "23.会议室2解题报告",
                "25.安排课程解题报告",
                "27.部分求和解题报告",
                "29.朋友圈解和解题报告",
                "31.设计贪吃蛇解题报告",
                "37.计算器解题报告",
                "38.计算器II解题报告",
                "41.沙漠之旅解题报告",
                "42.沙漠之旅II解题报告",
                "57.斐波那契数列解题报告",
                "59.设计Twitter解题报告",
                "60.数组去重解题报告",
                "61.数组去重II解题报告",
                "62.设计LRU Cache解题报告",
                "63.公共祖先解题报告",
                "65.寻找k解题报告",
                "66.验证heap解题报告",
                "67.树的三种遍历II解题报告",
                "68.克隆图解题报告",
                "69.质因数解题报告",
                "70.组合数解题报告"
            ]

        }

    ]

    
})