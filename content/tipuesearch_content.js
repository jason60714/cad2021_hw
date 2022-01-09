var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 你的學號 40923115\xa0 \n 網站倉儲:  https://github.com/jason60714/cad2021_hw \n 網站連結:  https://jason60714.github.io/cad2021_hw/ \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': '上課進度', 'text': '', 'tags': '', 'url': '上課進度.html'}, {'title': '上傳紀錄', 'text': '', 'tags': '', 'url': '上傳紀錄.html'}, {'title': '1004', 'text': '\xa0 meARM.7z \xa0零件尺寸 \n \n', 'tags': '', 'url': '1004.html'}, {'title': '1007', 'text': '練習push \n \xa0 \xa0 \xa0 \xa0 git version \xa0 \xa0 \xa0 \xa0 cd tmp \xa0 \xa0 \xa0 \xa0 cd cad2021_hw \xa0 \xa0 \xa0 \xa0 cms \n', 'tags': '', 'url': '1007.html'}, {'title': '1016', 'text': '下載sw \n \n', 'tags': '', 'url': '1016.html'}, {'title': '1018', 'text': '更改網連結 \n \n', 'tags': '', 'url': '1018.html'}, {'title': '1024', 'text': '下載wink \n \n', 'tags': '', 'url': '1024.html'}, {'title': '1027', 'text': '下載shareX \n \n', 'tags': '', 'url': '1027.html'}, {'title': '1031', 'text': '學習使用wink \n \n', 'tags': '', 'url': '1031.html'}, {'title': '1120', 'text': '錄影 \n \n', 'tags': '', 'url': '1120.html'}, {'title': '1201', 'text': 'w11 wink 製作 \n \n \n', 'tags': '', 'url': '1201.html'}, {'title': '1206', 'text': 'slvs 四連桿結合教學 \n 新nx檔案下載 \n', 'tags': '', 'url': '1206.html'}, {'title': '1208', 'text': 'w11轉出wink製作 \n', 'tags': '', 'url': '1208.html'}, {'title': '1213', 'text': 'w13 wink製作 \n', 'tags': '', 'url': '1213.html'}, {'title': '1220', 'text': '做HW3-1 \n', 'tags': '', 'url': '1220.html'}, {'title': '1227', 'text': '分組組長回報 \n 更新日期:2021/12/27 \n \n', 'tags': '', 'url': '1227.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'W13', 'text': '這是我所分配到的製圖程式，SW、SLVS，我比較熟SW大部分用這繪製，比較簡單的零件用SLVS。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Solidwork', 'text': '下載安裝與配置 \n 影片: https://youtu.be/WVKSCnWfUKw \n 零組件繪圖教學 \n 影片: https://youtu.be/q3EOuHbsMe0 \n', 'tags': '', 'url': 'Solidwork.html'}, {'title': 'Solvespace', 'text': '下載安裝與配置 \n 影片: https://youtu.be/0kYaazaYey8 \n 零組件繪圖教學 \n 影片: https://youtu.be/QxKUKXTLBfQ \n \n', 'tags': '', 'url': 'Solvespace.html'}, {'title': '運動場景', 'text': '零件轉入 CoppeliaSim 教學 \n 影片: https://youtu.be/KiVQ7bH8Aho \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'w11', 'text': '', 'tags': '', 'url': 'w11.html'}, {'title': '繪圖wink', 'text': '\n \n \n   \n \n \n \n \n', 'tags': '', 'url': '繪圖wink.html'}, {'title': '轉出wink', 'text': '\n \n \n \n \n   \n \n \n \n \n \n \n', 'tags': '', 'url': '轉出wink.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Hw3-1', 'text': '1957年Patrick J. Hanratty被稱為CAD/CAM之父他在通用電氣公司工作，他在那裡編寫了Pronto，一種早期的商業數控編程語言，根據加利福尼亞大學 2012 年的說法，行業分析師認為當今可用的所有 3-D 機械 CAD/CAM 系統中有 70% 的根源可以追溯到 Hanratty 的原始代碼。 \n 1961年Patrick J. Hanratty轉到通用汽車研究實驗室，在那裡他幫助開發了DAC，Design Augmented by Computer，是最早的圖形計算機輔助設計系統之一。 \n 1963年伊凡·蘇澤蘭製作Sketchpad它是最早的人機介面HCI，被認為是現代電腦輔助設計CAD的始祖。 \n 1973年UGS開發的第一個商業產品被稱為UNIAPT，並繼續從MGS購買自動繪圖和加工ADAM軟件代碼，是世界上最早的終端用戶CAM產品之一。 \n 1981年CATIA誕生於達梭航空內部的軟體開發項目CADAM1、2起初該軟體被命名為CATI被重命名為CATIA。同年，達梭創立了專注於工程軟體開發的子公司達梭系統，1984年，美國波音飛機製造公司啟用CATIA作為其主要CAD軟體，並從此成為CATIA的重要用戶。 \n 1982年AutoCAD由美國歐特克公司為電腦上應用電腦輔助設計技術而開發的繪圖程式軟體包該軟體推廣的.dwg檔案格式成為二維繪圖的常用標準格式。 \n 1987年美國PTC(Parametric Technology Corporation)推出的一款EDA工具，Creo Parametric，舊稱Pro/ENGINEER，，主要用於三維製圖、建模，在複雜的三維模型設計，該軟體是第一個運用「參數化設計」、「實體造型」「特徵導向」思想的三維設計軟體。 \n 1995年SolidWorks公司發表其第一款產品SolidWorks 95，1997年被達梭系統併購，SolidWorks公司現在是達梭系統的子公司運行在微軟Windows平台下的3D機械CAD軟體，包括工具種類：三維建模、裝配、給圖，板金，焊接等。它可以從其它2D和3D CAD程序中導入多種不同格式的文件。 \n 1999年Autodesk開發了Autodesk Inventor，用來進行3D機械設計、模擬、顯示、與儲存，Inventor允許使用者在一個單一環境中，整合2D和3D數據，創建一個虛擬的產品，使用戶能夠在產品正式生產前，驗證和調整產品的屬性。 \n 2008年由 Jonathan Westhues 和一個志願者社區開發，是一個免費的2D和3DCAD程序，它是一個基於約束的參數建模器，具有簡單的機械仿真功能它是一個基於約束的參數建模器，具有簡單的機械仿真功能。 \n 2015年Onshape 是由一家同名公司開發，它主要專注於機械 CAD (MCAD)，用於多個行業的產品和機械設計，包括消費電子、機械機械、醫療設備、3D 打印、機器零件和工業設備。 \n', 'tags': '', 'url': 'Hw3-1.html'}, {'title': 'Hw3-2', 'text': '', 'tags': '', 'url': 'Hw3-2.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': '期末總結', 'text': '1.這學期學習了兩套新的cad軟體，分別是sw、solvespace，在畫圖上已經大致清楚，但solvespace的組合零件的功能要再多多練習。 \n \n 2.學習新的工具wink可以把自己做事的內容截成小短片，方便紀錄也比較有動態感。 \n \n 3.coppeliasim學了coppeliasim，如何使用這個軟體來模擬畫出來的四連桿之運動過程。 \n \n \n \n \n', 'tags': '', 'url': '期末總結.html'}]};