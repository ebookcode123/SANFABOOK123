/**
 * Created by leizha on 10/14/16.
 */
var OB = angular.module("Template",['ngRoute']);


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
            'JSON3':["一个指导思想", "3plus1模版"]
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
                "1.快乐数字",
                "2.忧郁数字",
                "3.翻转链表",
                "4.翻转有向图",
                "5.平方求和",
                "6.立方求和",
                "7.二叉树垂直遍历",
                "8.三叉树垂直遍历",
                "9.两个元素的和",
                "10.三个元素的和",
                "11.四个元素的和",
                "12.取硬币",
                "13.取硬币II",
                "14.模版匹配",
                "15.模版匹配II",
                "16.字符串变换",
                "17.字符串变换II",
                "18.偷金子",
                "19.偷金子II",
                "20.偷金子III",
                "21.偷金子IV",
                "22.会议室",
                "23.会议室2",
                "24.寻找字符串",
                "25.安排课程",
                "26.安排课程II",
                "27.部分求和",
                "28.部分求和II",
                "29.朋友圈",
                "30.朋友圈II",
                "31.设计贪吃蛇",
                "32.随机数生成器",
                "33.统治者",
                "34.统治者II",
                "35.拆链表",
                "36.寻找环",
                "37.计算器",
                "38.计算器II",
                "39.看山",
                "40.栈排序",
                "41.沙漠之旅",
                "42.沙漠之旅II",
                "43.二进制生成器",
                "44.高效KQ",
                "45.速配",
                "46.旅程安排",
                "47.旅程安排2",
                "48.二叉树直径",
                "49.克隆二叉树",
                "50.克隆二叉树II",
                "51.树的宽度",
                "52.验证heap",
                "53.TopK",
                "54.排序二叉搜索树",
                "55.走迷宫",
                "56.走迷宫II",
                "57.斐波那契数列",
                "58.设计RateLimiter",
                "59.设计Twitter",
                "60.数组去重",
                "61.数组去重II",
                "62.设计LRU Cache",
                "63.公共祖先",
                "64.树的三种遍历",
                "65.寻找k",
                "66.验证heap",
                "67.树的三种遍历II",
                "68.克隆图",
                "69.质因数",
                "70.组合数"
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
                "64.树的三种遍历解题报告",
                "65.寻找k解题报告",
                "66.验证heap解题报告",
                "67.树的三种遍历II解题报告",
                "68.克隆图解题报告",
                "69.质因数解题报告",
                "70.组合数解题报告"
            ]

        }

    ]

    

});


OB.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/引言', {
            templateUrl: 'view/引言.html',
            controller: 'navRepeat'
        }).when('/试听课', {
            templateUrl: 'view/试听课.html',
            controller: 'navRepeat'
        }).when('/公开课第一节', {
            templateUrl: 'view/公开课第一节.html',
            controller: 'navRepeat'
        }).when('/公开课第二节', {
            templateUrl: 'view/公开课第二节.html',
            controller: 'navRepeat'
        }).when('/公开课第三节', {
            templateUrl: 'view/公开课第三节.html',
            controller: 'navRepeat'
        }).when('/公开课第四节', {
            templateUrl: 'view/公开课第四节.html',
            controller: 'navRepeat'
        }).when('/学习计划', {
            templateUrl: 'view/学习计划.html',
            controller: 'navRepeat'
        }).when('/7天怎么学', {
            templateUrl: 'view/7天怎么学.html',
            controller: 'navRepeat'
        }).when('/30天怎么学', {
            templateUrl: 'view/30天怎么学.html',
            controller: 'navRepeat'
        }).when('/100天怎么学', {
            templateUrl: 'view/100天怎么学.html',
            controller: 'navRepeat'
        }).when('/生长学习法', {
            templateUrl: 'view/生长学习法.html',
            controller: 'navRepeat'
        }).when('/一个指导思想', {
            templateUrl: 'view/一个指导思想.html',
            controller: 'navRepeat'
        }).when('/3plus1模版', {
            templateUrl: 'view/3+1模版.html',
            controller: 'navRepeat'
        }).when('/数据结构', {
            templateUrl: 'view/数据结构.html',
            controller: 'navRepeat'
        }).when('/Linear', {
            templateUrl: 'view/Linear.html',
            controller: 'navRepeat'
        }).when('/Tree', {
            templateUrl: 'view/Tree.html',
            controller: 'navRepeat'
        }).when('/Graph', {
            templateUrl: 'view/Graph.html',
            controller: 'navRepeat'
        }).when('/Big Data', {
            templateUrl: 'view/Big Data.html',
            controller: 'navRepeat'
        }).when('/Array', {
            templateUrl: 'view/Array.html',
            controller: 'navRepeat'
        }).when('/List', {
            templateUrl: 'view/List.html',
            controller: 'navRepeat'
        }).when('/Queue', {
            templateUrl: 'view/Queue.html',
            controller: 'navRepeat'
        }).when('/Stack', {
            templateUrl: 'view/Stack.html',
            controller: 'navRepeat'
        }).when('/Hash', {
            templateUrl: 'view/Hash.html',
            controller: 'navRepeat'
        }).when('/Binary Tree', {
            templateUrl: 'view/Binary Tree.html',
            controller: 'navRepeat'
        }).when('/Binary Tree', {
            templateUrl: 'view/Binary Tree.html',
            controller: 'navRepeat'
        }).when('/Binary Search Tree', {
            templateUrl: 'view/Binary Search Tree.html',
            controller: 'navRepeat'
        }).when('/Heap', {
            templateUrl: 'view/Heap.html',
            controller: 'navRepeat'
        }).when('/Trie', {
            templateUrl: 'view/Trie.html',
            controller: 'navRepeat'
        }).when('/Segment Tree', {
            templateUrl: 'view/Segment Tree.html',
            controller: 'navRepeat'
        }).when('/Binary Index Tree', {
            templateUrl: 'view/Binary Index Tree.html',
            controller: 'navRepeat'
        }).when('/Matrix', {
            templateUrl: 'view/Matrix.html',
            controller: 'navRepeat'
        }).when('/Neighbor', {
            templateUrl: 'view/Neighbor.html',
            controller: 'navRepeat'
        }).when('/算法结构', {
            templateUrl: 'view/算法结构.html',
            controller: 'navRepeat'
        }).when('/Iteration', {
            templateUrl: 'view/Iteration.html',
            controller: 'navRepeat'
        }).when('/Recursion', {
            templateUrl: 'view/Recursion.html',
            controller: 'navRepeat'
        }).when('/Search', {
            templateUrl: 'view/Search.html',
            controller: 'navRepeat'
        }).when('/Dynamic Programming', {
            templateUrl: 'view/Dynamic Programming.html',
            controller: 'navRepeat'
        }).when('/Greedy', {
            templateUrl: 'view/Greedy.html',
            controller: 'navRepeat'
        }).when('/Divide and Conquer', {
            templateUrl: 'view/Divide and Conquer.html',
            controller: 'navRepeat'
        }).when('/System Design', {
            templateUrl: 'view/System Design.html',
            controller: 'navRepeat'
        }).when('/Math', {
            templateUrl: 'view/Math',
            controller: 'navRepeat'
        }).when('/Depth First Search', {
            templateUrl: 'view/Depth First Search.html',
            controller: 'navRepeat'
        }).when('/Breadth First Search', {
            templateUrl: 'view/Breadth First Search.html',
            controller: 'navRepeat'
        }).when('/A*Search', {
            templateUrl: 'view/A*Search.html',
            controller: 'navRepeat'
        }).when('/Game', {
            templateUrl: 'view/Game.html',
            controller: 'navRepeat'
        }).when('/Bit', {
            templateUrl: 'view/Bit.html',
            controller: 'navRepeat'
        }).when('/Probability', {
            templateUrl: 'view/Probability.html',
            controller: 'navRepeat'
        }).when('/Equation', {
            templateUrl: 'view/Equation.html',
            controller: 'navRepeat'
        }).when('/高频题目列表', {
            templateUrl: 'view/高频题目列表.html',
            controller: 'navRepeat'
        }).when('/1.快乐数字', {
            templateUrl: 'view/1.快乐数字.html',
            controller: 'navRepeat'
        }).when('/2.忧郁数字', {
            templateUrl: 'view/2.忧郁数字.html',
            controller: 'navRepeat'
        }).when('/3.翻转链表', {
            templateUrl: 'view/3.翻转链表.html',
            controller: 'navRepeat'
        }).when('/4.翻转有向图', {
            templateUrl: 'view/4.翻转有向图.html',
            controller: 'navRepeat'
        }).when('/5.平方求和', {
            templateUrl: 'view/5.平方求和.html',
            controller: 'navRepeat'
        }).when('/6.立方求和', {
            templateUrl: 'view/6.立方求和.html',
            controller: 'navRepeat'
        }).when('/7.二叉树垂直遍历', {
            templateUrl: 'view/7.二叉树垂直遍历.html',
            controller: 'navRepeat'
        }).when('/8.三叉树垂直遍历', {
            templateUrl: 'view/8.三叉树垂直遍历.html',
            controller: 'navRepeat'
        }).when('/9.两个元素的和', {
            templateUrl: 'view/9.两个元素的和.html',
            controller: 'navRepeat'
        }).when('/10.三个元素的和', {
            templateUrl: 'view/10.三个元素的和.html',
            controller: 'navRepeat'
        }).when('/11.四个元素的和', {
            templateUrl: 'view/11.四个元素的和.html',
            controller: 'navRepeat'
        }).when('/12.取硬币', {
            templateUrl: 'view/12.取硬币.html',
            controller: 'navRepeat'
        }).when('/13.取硬币II', {
            templateUrl: 'view/13.取硬币II.html',
            controller: 'navRepeat'
        }).when('/14.模版匹配', {
            templateUrl: 'view/14.模版匹配.html',
            controller: 'navRepeat'
        }).when('/15.模版匹配II', {
            templateUrl: 'view/15.模版匹配II.html',
            controller: 'navRepeat'
        }).when('/16.字符串变换', {
            templateUrl: 'view/16.字符串变换.html',
            controller: 'navRepeat'
        }).when('/17.字符串变换II', {
            templateUrl: 'view/17.字符串变换II.html',
            controller: 'navRepeat'
        }).when('/18.偷金子', {
            templateUrl: 'view/18.偷金子.html',
            controller: 'navRepeat'
        }).when('/19.偷金子II', {
            templateUrl: 'view/19.偷金子II.html',
            controller: 'navRepeat'
        }).when('/20.偷金子III', {
            templateUrl: 'view/20.偷金子III.html',
            controller: 'navRepeat'
        }).when('/21.偷金子IV', {
            templateUrl: 'view/21.偷金子IV.html',
            controller: 'navRepeat'
        }).when('/22.会议室', {
            templateUrl: 'view/22.会议室.html',
            controller: 'navRepeat'
        }).when('/23.会议室2', {
            templateUrl: 'view/23.会议室2.html',
            controller: 'navRepeat'
        }).when('/24.寻找字符串', {
            templateUrl: 'view/24.寻找字符串.html',
            controller: 'navRepeat'
        }).when('/25.安排课程', {
            templateUrl: 'view/25.安排课程.html',
            controller: 'navRepeat'
        }).when('/26.安排课程II', {
            templateUrl: 'view/26.安排课程II.html',
            controller: 'navRepeat'
        }).when('/27.部分求和', {
            templateUrl: 'view/27.部分求和.html',
            controller: 'navRepeat'
        }).when('/28.部分求和II', {
            templateUrl: 'view/28.部分求和II.html',
            controller: 'navRepeat'
        }).when('/29.朋友圈', {
            templateUrl: 'view/29.朋友圈.html',
            controller: 'navRepeat'
        }).when('/30.朋友圈II', {
            templateUrl: 'view/30.朋友圈II.html',
            controller: 'navRepeat'
        }).when('/31.设计贪吃蛇', {
            templateUrl: 'view/31.设计贪吃蛇.html',
            controller: 'navRepeat'
        }).when('/32.随机数生成器', {
            templateUrl: 'view/32.随机数生成器.html',
            controller: 'navRepeat'
        }).when('/33.统治者', {
            templateUrl: 'view/33.统治者.html',
            controller: 'navRepeat'
        }).when('/34.统治者II', {
            templateUrl: 'view/34.统治者II.html',
            controller: 'navRepeat'
        }).when('/35.拆链表', {
            templateUrl: 'view/35.拆链表.html',
            controller: 'navRepeat'
        }).when('/36.寻找环', {
            templateUrl: 'view/36.寻找环.html',
            controller: 'navRepeat'
        }).when('/37.计算器', {
            templateUrl: 'view/37.计算器.html',
            controller: 'navRepeat'
        }).when('/38.计算器II', {
            templateUrl: 'view/38.计算器II.html',
            controller: 'navRepeat'
        }).when('/39.看山', {
            templateUrl: 'view/39.看山.html',
            controller: 'navRepeat'
        }).when('/40.栈排序', {
            templateUrl: 'view/40.栈排序.html',
            controller: 'navRepeat'
        }).when('/41.沙漠之旅', {
            templateUrl: 'view/41.沙漠之旅.html',
            controller: 'navRepeat'
        }).when('/42.沙漠之旅II', {
            templateUrl: 'view/42.沙漠之旅II.html',
            controller: 'navRepeat'
        }).when('/43.二进制生成器', {
            templateUrl: 'view/43.二进制生成器.html',
            controller: 'navRepeat'
        }).when('/44.高效KQ', {
            templateUrl: 'view/44.高效KQ.html',
            controller: 'navRepeat'
        }).when('/45.速配', {
            templateUrl: 'view/45.速配.html',
            controller: 'navRepeat'
        }).when('/46.旅程安排', {
            templateUrl: 'view/46.旅程安排.html',
            controller: 'navRepeat'
        }).when('/47.旅程安排2', {
            templateUrl: 'view/47.旅程安排2.html',
            controller: 'navRepeat'
        }).when('/48.二叉树直径', {
            templateUrl: 'view/48.二叉树直径.html',
            controller: 'navRepeat'
        }).when('/49.克隆二叉树', {
            templateUrl: 'view/49.克隆二叉树.html',
            controller: 'navRepeat'
        }).when('/50.克隆二叉树II', {
            templateUrl: 'view/50.克隆二叉树II.html',
            controller: 'navRepeat'
        }).when('/51.树的宽度', {
            templateUrl: 'view/51.树的宽度.html',
            controller: 'navRepeat'
        }).when('/52.验证heap', {
            templateUrl: 'view/52.验证heap.html',
            controller: 'navRepeat'
        }).when('/54.排序二叉搜索树',{
            templateUrl: 'view/54.排序二叉搜索树.html',
            controller: 'navRepeat'
        }).when('/53.TopK', {
            templateUrl: 'view/53.TopK.html',
            controller: 'navRepeat'
        }).when('/55.走迷宫', {
            templateUrl: 'view/55.走迷宫.html',
            controller: 'navRepeat'
        }).when('/56.走迷宫II', {
            templateUrl: 'view/56.走迷宫II.html',
            controller: 'navRepeat'
        }).when('/57.斐波那契数列', {
            templateUrl: 'view/57.斐波那契数列.html',
            controller: 'navRepeat'
        }).when('/58.设计RateLimiter', {
            templateUrl: 'view/58.设计RateLimiter.html',
            controller: 'navRepeat'
        }).when('/59.设计Twitter', {
            templateUrl: 'view/59.设计Twitter.html',
            controller: 'navRepeat'
        }).when('/60.数组去重', {
            templateUrl: 'view/60.数组去重.html',
            controller: 'navRepeat'
        }).when('/61.数组去重II', {
            templateUrl: 'view/61.数组去重II.html',
            controller: 'navRepeat'
        }).when('/62.设计LRU Cache', {
            templateUrl: 'view/62.设计LRU Cache.html',
            controller: 'navRepeat'
        }).when('/63.公共祖先', {
            templateUrl: 'view/63.公共祖先.html',
            controller: 'navRepeat'
        }).when('/64.树的三种遍历', {
            templateUrl: 'view/64.树的三种遍历.html',
            controller: 'navRepeat'
        }).when('/65.寻找k', {
            templateUrl: 'view/65.寻找k.html',
            controller: 'navRepeat'
        }).when('/66.验证heap', {
            templateUrl: 'view/66.验证heap.html',
            controller: 'navRepeat'
        }).when('/67.树的三种遍历II', {
            templateUrl: 'view/67.树的三种遍历II.html',
            controller: 'navRepeat'
        }).when('/68.克隆图', {
            templateUrl: 'view/68.克隆图.html',
            controller: 'navRepeat'
        }).when('/69.质因数', {
            templateUrl: 'view/69.质因数.html',
            controller: 'navRepeat'
        }).when('/70.组合数', {
            templateUrl: 'view/70.组合数.html',
            controller: 'navRepeat'
        }).when('/解题报告', {
            templateUrl: 'view/解题报告.html',
            controller: 'navRepeat'
        });
}]);

OB.config(['$routeProvider', function ($routeProvider) {
    var SolutionReport =[
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
        "64.树的三种遍历解题报告",
        "65.寻找k解题报告",
        "66.验证heap解题报告",
        "67.树的三种遍历II解题报告",
        "68.克隆图解题报告",
        "69.质因数解题报告",
        "70.组合数解题报告"
    ];

    // var S1 = $scope.navOB[7].JSON;
    for(var i in SolutionReport){
            $routeProvider.when('/'+SolutionReport[i], {
                templateUrl: 'view/'+SolutionReport[i]+'.html',
                controller: 'navRepeat'
            })
        }

}]);