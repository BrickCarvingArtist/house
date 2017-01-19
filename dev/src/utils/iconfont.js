;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-all" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M460.8 486.4 486.4 486.4 486.4 460.8 486.4 243.2C486.4 108.884349 377.51565 0 243.2 0 108.884349 0 0 108.884349 0 243.2 0 377.51565 108.884349 486.4 243.2 486.4L460.8 486.4ZM51.2 243.2C51.2 137.161328 137.161328 51.2 243.2 51.2 349.238671 51.2 435.2 137.161328 435.2 243.2L435.2 460.8 460.8 435.2 243.2 435.2C137.161328 435.2 51.2 349.238671 51.2 243.2Z"  ></path>' +
    '' +
    '<path d="M460.8 588.8 435.2 563.2 435.2 780.8C435.2 886.838671 349.238671 972.8 243.2 972.8 137.161328 972.8 51.2 886.838671 51.2 780.8 51.2 674.761329 137.161328 588.8 243.2 588.8L460.8 588.8ZM0 780.8C0 915.11565 108.884349 1024 243.2 1024 377.51565 1024 486.4 915.11565 486.4 780.8L486.4 563.2 486.4 537.6 460.8 537.6 243.2 537.6C108.884349 537.6 0 646.48435 0 780.8Z"  ></path>' +
    '' +
    '<path d="M563.2 435.2 588.8 460.8 588.8 243.2C588.8 137.161328 674.761329 51.2 780.8 51.2 886.838671 51.2 972.8 137.161328 972.8 243.2 972.8 349.238671 886.838671 435.2 780.8 435.2L563.2 435.2ZM1024 243.2C1024 108.884349 915.11565 0 780.8 0 646.48435 0 537.6 108.884349 537.6 243.2L537.6 460.8 537.6 486.4 563.2 486.4 780.8 486.4C915.11565 486.4 1024 377.51565 1024 243.2Z"  ></path>' +
    '' +
    '<path d="M1024 780.8C1024 646.48435 915.11565 537.6 780.8 537.6L563.2 537.6 537.6 537.6 537.6 563.2 537.6 780.8C537.6 915.11565 646.48435 1024 780.8 1024 818.513163 1024 855.051123 1015.390662 888.179087 999.065099 900.861235 992.815296 906.075682 977.467919 899.825882 964.785773 893.576079 952.103625 878.228702 946.889178 865.546554 953.138978 839.420429 966.014014 810.620764 972.8 780.8 972.8 674.761329 972.8 588.8 886.838671 588.8 780.8L588.8 563.2 563.2 588.8 780.8 588.8C886.838671 588.8 972.8 674.761329 972.8 780.8 972.8 799.469549 970.142607 817.755731 964.968006 835.279443 960.963957 848.839106 968.71031 863.07731 982.269973 867.081361 995.829636 871.085412 1010.06784 863.339057 1014.071891 849.779394 1020.63305 827.560122 1024 804.391296 1024 780.8Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-comments" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M131.253515 789.333333C87.810305 789.333333 52.51282 753.473975 52.51282 709.41763L52.51282 69.333333 26.25641 96 892.853331 96C936.231586 96 971.487179 131.853286 971.487179 175.915703L971.487179 816 997.74359 789.333333 525.128205 789.333333 517.234323 789.333333 510.649171 793.754413 285.912493 944.636066C273.815607 952.757562 270.491629 969.301024 278.488179 981.586923 286.484727 993.872821 302.773675 997.248736 314.87056 989.127241L539.607238 838.245587 525.128205 842.666667 997.74359 842.666667 1024 842.666667 1024 816 1024 175.915703C1024 102.41369 965.24899 42.666667 892.853331 42.666667L26.25641 42.666667 0 42.666667 0 69.333333 0 709.41763C0 782.925715 58.804881 842.666667 131.253515 842.666667L268.117303 842.666667C282.618319 842.666667 294.373713 830.727593 294.373713 816 294.373713 801.272407 282.618319 789.333333 268.117303 789.333333L131.253515 789.333333Z"  ></path>' +
    '' +
    '<path d="M367.589743 442.666667C367.589743 383.756294 320.568162 336 262.564102 336 204.560043 336 157.538461 383.756294 157.538461 442.666667 157.538461 501.577039 204.560043 549.333333 262.564102 549.333333 320.568162 549.333333 367.589743 501.577039 367.589743 442.666667ZM210.051282 442.666667C210.051282 413.211479 233.562074 389.333333 262.564102 389.333333 291.566133 389.333333 315.076924 413.211479 315.076924 442.666667 315.076924 472.121854 291.566133 496 262.564102 496 233.562074 496 210.051282 472.121854 210.051282 442.666667Z"  ></path>' +
    '' +
    '<path d="M630.153845 442.666667C630.153845 383.756294 583.132265 336 525.128205 336 467.124145 336 420.102564 383.756294 420.102564 442.666667 420.102564 501.577039 467.124145 549.333333 525.128205 549.333333 583.132265 549.333333 630.153845 501.577039 630.153845 442.666667ZM472.615386 442.666667C472.615386 413.211479 496.126176 389.333333 525.128205 389.333333 554.130236 389.333333 577.641026 413.211479 577.641026 442.666667 577.641026 472.121854 554.130236 496 525.128205 496 496.126176 496 472.615386 472.121854 472.615386 442.666667Z"  ></path>' +
    '' +
    '<path d="M892.717948 442.666667C892.717948 383.756294 845.696367 336 787.692307 336 729.688247 336 682.666667 383.756294 682.666667 442.666667 682.666667 501.577039 729.688247 549.333333 787.692307 549.333333 845.696367 549.333333 892.717948 501.577039 892.717948 442.666667ZM735.179488 442.666667C735.179488 413.211479 758.690278 389.333333 787.692307 389.333333 816.694338 389.333333 840.205129 413.211479 840.205129 442.666667 840.205129 472.121854 816.694338 496 787.692307 496 758.690278 496 735.179488 472.121854 735.179488 442.666667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-more" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1001.526404 991.699618C999.922771 986.822379 999.922771 986.822379 998.661741 984.531443 997.556333 982.547938 996.293839 980.724943 994.702325 978.653549 992.500075 975.787264 989.423708 972.169135 985.358477 967.619563 978.223881 959.634933 967.82403 948.546074 954.04227 934.18551 932.495573 911.733901 910.909628 889.684252 858.479859 836.391998 806.561909 783.619985 784.782022 761.370402 763.425645 739.113463 750.035742 725.158933 739.986204 714.441517 733.331893 706.993367 730.0273 703.294545 727.65239 700.501581 726.365602 698.828322 727.222236 700.438869 727.222236 700.438869 728.57702 704.41879 730.685899 711.913483 730.685899 711.913483 721.610157 729.174018 803.853596 649.91606 851.33145 539.987051 851.33145 422.399774 851.33145 189.11482 665.530044 0 436.332393 0 207.134741 0 21.333333 189.11482 21.333333 422.399774 21.333333 655.684727 207.134741 844.799548 436.332393 844.799548 441.356706 844.799548 446.556279 844.56416 452.347883 844.11767 456.487002 843.798575 460.079727 843.454155 466.651669 842.776804 479.958906 841.405269 484.804847 841.014569 490.397372 841.014558 499.896397 841.014541 514.964663 837.646929 537.39015 831.429666 540.021178 830.700239 542.719546 829.938705 545.476431 829.148403 553.976567 826.711712 562.667765 824.108471 571.097184 821.505798 576.160226 819.942528 580.026436 818.721914 582.233225 818.013231 595.480279 813.759108 602.830912 799.380094 598.651326 785.896804 594.471738 772.413515 580.344653 764.931795 567.097598 769.18592 565.058735 769.840674 561.367413 771.006074 556.494825 772.510539 548.364858 775.020755 539.986116 777.530404 531.839533 779.865745 529.217662 780.617342 526.657771 781.339795 524.170112 782.029476 506.936476 786.807345 493.480702 789.814579 490.397278 789.814586 482.458716 789.814601 476.720548 790.277235 461.583853 791.837329 455.416051 792.473024 452.140828 792.787008 448.548723 793.063932 443.933724 793.419714 439.960704 793.599575 436.332393 793.599575 234.916275 793.599575 71.63625 627.407763 71.63625 422.399774 71.63625 217.391785 234.916275 51.199973 436.332393 51.199973 637.74851 51.199973 801.028533 217.391785 801.028533 422.399774 801.028533 525.775443 759.336083 622.309077 687.025254 691.994987 677.769918 709.563029 677.769918 709.563029 679.976768 717.62707 681.566101 722.305182 681.566101 722.305182 682.808947 724.550298 683.910231 726.511657 685.170219 728.326692 686.754421 730.386692 688.964348 733.260343 692.047349 736.886044 696.115554 741.439575 703.261474 749.437982 713.66454 760.532418 727.438434 774.887134 749.001325 797.359294 770.84669 819.675765 822.916311 872.601946 875.194278 925.7399 896.716879 947.724843 918.057933 969.962174 931.455439 983.922347 941.502012 994.634524 948.144469 1002.068378 951.440527 1005.757135 953.805218 1008.538259 955.077419 1010.194061 954.139053 1008.441707 954.139053 1008.441707 952.75811 1004.249822 950.686453 996.172693 950.686453 996.172693 960.850534 978.849743 950.24269 987.977788 948.913429 1004.130236 957.881542 1014.927251 966.849655 1025.724265 982.719104 1027.077231 993.326948 1017.949188 1003.683753 1000.332838 1003.683753 1000.332838 1001.526404 991.699618Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-account" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M793.6 316.991454C793.6 153.703982 661.792629 21.333333 499.2 21.333333 336.607371 21.333333 204.8 153.703982 204.8 316.991454 204.8 480.278923 336.607371 612.649572 499.2 612.649572 661.792629 612.649572 793.6 480.278923 793.6 316.991454ZM256 316.991454C256 182.101803 364.88435 72.752137 499.2 72.752137 633.51565 72.752137 742.4 182.101803 742.4 316.991454 742.4 451.881103 633.51565 561.230769 499.2 561.230769 364.88435 561.230769 256 451.881103 256 316.991454Z"  ></path>' +
    '' +
    '<path d="M0 998.290598 0 1024 25.6 1024 486.4 1024 998.4 1024 1024 1024 1024 998.290598C1024 767.462671 787.090923 561.230769 512 561.230769 495.448045 561.230769 478.989086 561.900892 462.660538 563.232578 448.568439 564.381869 485.255599 576.786276 486.4 590.938596 501.350035 589.719337 496.831226 612.649572 512 612.649572 760.310844 612.649572 972.8 797.623669 972.8 998.290598L998.4 972.581197 486.4 972.581197 25.6 972.581197 51.2 998.290598C51.2 861.757427 137.013906 736.945338 275.263548 667.439085 287.906261 661.082846 293.024384 645.637353 286.695191 632.94061 280.366001 620.243866 264.986234 615.103872 252.34352 621.460111 97.581613 699.268053 0 841.195691 0 998.290598Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.333333 533.333333C865.115407 533.333333 874.666667 523.782074 874.666667 512 874.666667 500.217926 865.115407 490.666667 853.333333 490.666667L170.666667 490.666667C158.884592 490.666667 149.333333 500.217926 149.333333 512 149.333333 523.782074 158.884592 533.333333 170.666667 533.333333L853.333333 533.333333Z"  ></path>' +
    '' +
    '<path d="M490.666667 853.333333C490.666667 865.115407 500.217926 874.666667 512 874.666667 523.782074 874.666667 533.333333 865.115407 533.333333 853.333333L533.333333 170.666667C533.333333 158.884592 523.782074 149.333333 512 149.333333 500.217926 149.333333 490.666667 158.884592 490.666667 170.666667L490.666667 853.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icondownload" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M995.84 1024 28.16 1024C12.8 1024 0 1011.2 0 995.84l0 0c0-15.36 12.8-28.16 28.16-28.16l967.68 0c15.36 0 28.16 12.8 28.16 28.16l0 0C1024 1011.2 1011.2 1024 995.84 1024z"  ></path>' +
    '' +
    '<path d="M926.72 376.32 926.72 376.32c-10.24-10.24-30.72-10.24-40.96 0L537.6 721.92 537.6 28.16C537.6 12.8 527.36 0 512 0s-25.6 12.8-25.6 28.16l0 693.76L138.24 376.32c-10.24-10.24-30.72-10.24-40.96 0-10.24 10.24-10.24 28.16 0 40.96l394.24 394.24c2.56 2.56 2.56 2.56 5.12 2.56 0 0 2.56 2.56 2.56 2.56 7.68 2.56 15.36 2.56 23.04 0 2.56 0 2.56-2.56 2.56-2.56 2.56 0 5.12-2.56 5.12-2.56l394.24-394.24C936.96 404.48 936.96 386.56 926.72 376.32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M942.08 738.304c-25.6-23.552-55.296-47.104-76.8-61.44-27.648-19.456-57.344-38.912-84.992-51.2-43.008-21.504-59.392-25.6-70.656-25.6-19.456 0-35.84 10.24-51.2 29.696-8.192 12.288-17.408 29.696-23.552 45.056-4.096 10.24-12.288 27.648-17.408 33.792-8.192-2.048-31.744-12.288-70.656-37.888-35.84-25.6-74.752-57.344-104.448-84.992-29.696-29.696-59.392-68.608-84.992-104.448-25.6-37.888-35.84-61.44-37.888-70.656 6.144-4.096 23.552-12.288 33.792-17.408 15.36-6.144 31.744-12.288 45.056-23.552 21.504-15.36 29.696-31.744 29.696-51.2 0-10.24-2.048-27.648-25.6-70.656-12.288-25.6-31.744-55.296-51.2-84.992-15.36-21.504-38.912-51.2-61.44-76.8-27.648-27.648-47.104-40.96-66.56-40.96-47.104 0-100.352 68.608-114.688 87.04-19.456 25.6-66.56 96.256-66.56 159.744 0 59.392 40.96 138.24 74.752 194.56 45.056 72.704 108.544 153.6 177.152 224.256l21.504 21.504 0 0c70.656 68.608 149.504 132.096 224.256 177.152 23.552 15.36 51.2 29.696 78.848 43.008l0 0c4.096 2.048 6.144 2.048 10.24 2.048 15.36 0 27.648-12.288 27.648-27.648 0-10.24-6.144-21.504-17.408-25.6-21.504-10.24-45.056-23.552-70.656-38.912-70.656-43.008-145.408-102.4-212.992-168.96l-21.504-21.504c-66.56-68.608-125.952-143.36-168.96-212.992-43.008-68.608-66.56-128-66.56-163.84 0-31.744 19.456-78.848 53.248-123.904 15.36-19.456 29.696-37.888 45.056-51.2 15.36-13.312 23.552-17.408 27.648-17.408 10.24 4.096 43.008 31.744 87.04 98.304 17.408 25.6 33.792 51.2 45.056 74.752 15.36 27.648 17.408 40.96 17.408 43.008 0 0-4.096 4.096-10.24 8.192-8.192 4.096-21.504 10.24-31.744 15.36-15.36 6.144-27.648 12.288-40.96 19.456-19.456 12.288-27.648 27.648-27.648 45.056 0 8.192 0 33.792 49.152 104.448 25.6 37.888 59.392 80.896 92.16 112.64l0 0c31.744 31.744 74.752 66.56 112.64 92.16 70.656 47.104 96.256 49.152 104.448 49.152l0 0c17.408 0 31.744-8.192 45.056-27.648 8.192-10.24 12.288-25.6 19.456-40.96 4.096-10.24 10.24-23.552 15.36-31.744 6.144-4.096 10.24-6.144 10.24-6.144 2.048 0 15.36 2.048 43.008 17.408 21.504 12.288 49.152 27.648 74.752 45.056 63.488 45.056 94.208 76.8 98.304 87.04-2.048 4.096-6.144 12.288-17.408 27.648-12.288 15.36-31.744 31.744-51.2 45.056-29.696 21.504-61.44 38.912-87.04 47.104l0 0c-10.24 4.096-17.408 15.36-17.408 25.6 0 15.36 12.288 27.648 27.648 27.648 2.048 0 4.096 0 6.144-2.048l0 0c2.048 0 2.048 0 4.096-2.048l0 0c45.056-15.36 82.944-40.96 102.4-55.296 21.504-15.36 87.04-70.656 87.04-115.712C982.016 785.408 969.728 765.952 942.08 738.304z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-trade" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 625.686419 1024 733.786972 986.820171 822.292028 919.295213 832.066406 911.83785 833.944717 897.868762 826.487354 888.094383 819.029988 878.320004 805.0609 876.441692 795.286522 883.899057 714.473916 945.555057 615.842022 979.478261 512 979.478261 253.818886 979.478261 44.521739 770.181114 44.521739 512 44.521739 253.818886 253.818886 44.521739 512 44.521739 770.181114 44.521739 979.478261 253.818886 979.478261 512 979.478261 599.047373 955.670714 682.541024 911.318368 755.201306 904.912864 765.695127 908.227102 779.394737 918.720924 785.800239 929.214746 792.205743 942.914355 788.891505 949.319857 778.397683 997.906701 698.800235 1024 607.290394 1024 512Z"  ></path>' +
    '' +
    '<path d="M551.801933 843.859904C551.801933 843.859904 551.910146 860.977865 529.538995 860.977865 507.167844 860.977865 503.178743 843.859904 503.178743 843.859904L503.178743 766.939614C414.434338 757.374349 357.575004 715.792638 332.599034 642.193237 332.599034 642.193237 321.314219 616.817284 346.988612 607.420567 372.663008 598.023853 386.403381 621.070048 386.403381 621.070048 407.128124 677.133131 446.052855 707.555531 503.178743 712.338163L503.178743 527.410628C441.270221 512.531326 401.083426 493.135386 382.61715 469.222223 364.150874 445.309058 354.917875 418.739277 354.917875 389.512077 354.917875 312.458551 404.33767 265.695735 503.178743 249.222223L503.178743 183.461353C503.178743 183.461353 508.270528 165.816358 526.337227 165.816358 544.403925 165.816358 551.801933 183.461353 551.801933 183.461353L551.801933 249.222223C630.183966 256.130468 681.596497 291.202581 706.041062 354.439614 706.041062 354.439614 706.041062 374.760719 686.661534 380.219202 667.282005 385.677687 651.838163 371.975846 651.838163 371.975846 637.224565 328.666449 603.879488 305.285041 551.801933 301.830918L551.801933 472.410628C661.536781 492.072561 716.403381 541.492358 716.403381 620.671497 716.403381 654.681329 703.915584 686.232947 678.939614 715.327294 653.963644 744.421643 611.584841 761.625577 551.801933 766.939614L551.801933 843.859904ZM503.178743 301.830918C475.811458 303.956533 453.957811 312.326014 437.61715 326.939614 421.276489 341.553214 413.106281 360.019213 413.106281 382.338163 413.106281 426.178963 443.130135 453.811537 503.178743 465.236715L503.178743 301.830918ZM551.801933 712.338163C584.217553 711.009655 609.525271 702.108779 627.725845 685.635266 645.926419 669.161754 655.026571 649.367266 655.026571 626.251209 655.026571 577.096373 620.618701 547.736764 551.801933 538.171497L551.801933 712.338163Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favorites" viewBox="0 0 1143 1024">' +
    '' +
    '<path d="M840.870698 8.239628c-80.634047 0-153.790512 31.672558-207.967256 83.134512a24.957023 24.957023 0 0 0-9.287442 19.33693 25.099907 25.099907 0 0 0 42.984186 17.598511l0.047628 0.023814c45.246512-43.341395 106.61507-69.989209 174.222884-69.989209 139.240186 0 252.094512 112.87814 252.094511 252.094512 0 67.631628-26.671628 128.952558-69.989209 174.246697l-451.322047 451.750698-451.560186-451.750698a251.165767 251.165767 0 0 1-70.013023-174.246697C50.080744 171.222326 162.958884 58.344186 302.19907 58.344186c66.917209 0 127.690419 26.171535 172.841674 68.72707l150.599442 150.456558a24.909395 24.909395 0 0 0 35.244651-35.244651l-149.14679-149.265861 0.119069-0.095255A301.127442 301.127442 0 0 0 302.19907 8.239628C135.263256 8.239628 0 143.550512 0 310.438698c0 81.443721 32.267907 155.314605 84.658605 209.658046l486.995348 486.828651 487.042977-487.138232A301.103628 301.103628 0 0 0 1143.069767 310.462512C1143.069767 143.526698 1007.782698 8.239628 840.870698 8.239628"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)