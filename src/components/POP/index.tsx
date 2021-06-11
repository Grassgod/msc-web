import React from 'react';
import './index.css'

export default class PopPaper extends React.Component {
    render() {
        return (
            <div className="pop_container">
                <h1 className="title">MSc - Project overview  plan test test</h1>
                <p className="author">He Huajie 10689523</p>
                <h2 className="introduction">1 &nbsp;&nbsp; Introduction Introduction</h2>
                <p>
                    The  Competition  on  Software  Verification  (SV-COMP)  is  an  annual  comparative  evaluation  offully-automatic software verifiers for C and Javaprograms[1],  and ESBMC is a context-boundedmodel  checker  used  for  the  verification  of  Cprograms[2]. The purpose of this project is to dis-cuss how to help ESBMC achieve good results inSV-COMP.
                </p>
                <p>
                    SV-COMP uses the verification time to evaluatethe performance of different software verificationtools. Therefore, we need to shorten the ESBMCverification time as much as possible to get a goodresult.
                </p>
                <p>
                    For each verification task, we have 5 types of SMT solvers,  3 types of encoding methods and 3 types of verification methods, so ESBMC canchoose more than 40 parameter combinations. Theverification time will also be different when ES-BMC uses different parameter combinations. Ac-cording to our previous experimental results, thebest parameter combination can get the result inmilliseconds, while the worst parameter combina-tion needed more than 1 hour.
                </p>
                <p>
                    Due  to  the  time  limitation  in  SV-COMP,  ES-BMC users cannot traverse all parameter combina-tions, and they usually choose parameter combina-tions based on the experience of experts. However,most of the selected parameter combinations didnot have a satisfactory result. Therefore, we need todevelop a parameter prediction model based on ma-chine learning to automatically help ESBMC userschoose the appropriate parameter combination.
                </p>
                <p>
                    In order to build this model, our experiment willbe divided into three parts:
                </p>
                <ol>
                    <li>Feature selection.  The first method is basedon the experience of experts to select valu-able  features  as  the  feature  vector  of  theC programs.   The second method is to usedeep learning models to select features. Thisproject gives priority to the first method, andthe specific reasons will be introduced in sec-tion 3;</li>
                    <li>Building  the  dataset.   Let  each  C  programin our dataset run by means of all ESBMC parameter combinations, and record the veri-fication results and verification time of eachparameter combination;</li>
                    <li>Prediction model. Use the selected features as feature vectors of each C program, and then calculate the similarity between the target C program and each C program in the dataset based on feature vectors, and then recommend the result of parameter combinations which has the highest similarity to the target program.</li>
                </ol>
                <h2 className="introduction">2 &nbsp;&nbsp; Background</h2>
                <h3 className="introduction">2.1 &nbsp;&nbsp; ESBMC</h3>
                <p>
                    ESBMC is a context-bounded model checker thatcan automatically verify the predefined securityproperties and user-defined program assertions inC programs[2]. For each verification task, ESBMCcan select different SMT solvers, encoding meth-ods and verification methods. It will has three dif-ferent results: verification success, verification fail-ure and time out. When we use different parametercombinations to check the C program,  the timetaken for each parameter combination is different.
                </p>
                <p>
                    When we use ESBMC to verify a C program, there are three parameters that can be configured. They are SMT solvers, encoding methods and verification methods. ESBMC provides five different SMT solvers: --z3, --boolector, --yices, --mathsat and --cvc. There are three encoding methods: --ir, --fixedbv and --floatbv. Verification methods have three types: --k-induction, --falsification and --incremental-bmc.
                </p>
                <p>
                    A standard ESBMC command line is as follows: <span className="standard_esbmc_command">esbmc example.c --z3 --fixedbv --incremental-bmc --max-k-step 10.</span>
                </p>
                <p>
                    In the command line, example.c is the name of the C program that needs to be verified, --z3 represents the type of SMT solver to be called, --fixedbv uses the encoding method, and --incremental-bmc represents the verification method.
                </p>
                <h3 className="introduction">2.2 &nbsp;&nbsp; Feature selection</h3>
                <p>
                    Feature selection is an important problem in feature engineering, and its goal is to find the optimal feature subset. Feature selection can eliminate irrelevant or redundant data, so as to reduce the number of features, improve model accuracy, and reduce running time[3].
                </p>
                <p>
                    Below is the general process of feature selection:
                </p>
                <ol>
                    <li>
                        Subset Generation: search feature subsets and provide feature subsets for the evaluation function;
                    </li>
                    <li>
                        Evaluation of Subset: evaluate the quality of a subset of features;
                    </li>
                    <li>
                        Stopping Criteria: related to the evaluation function, generally a threshold, the search can be stopped after the evaluation function reaches a certain standard;
                    </li>
                    <li>
                        Result Validation: verify the validity of the selected feature subset on the verification data set.
                    </li>
                </ol>
                <p>
                    However, when the number of features is large, the search space will be large, and how to find the optimal feature still requires some empirical conclusions.
                </p>
                <h3 className="introduction">2.3 &nbsp;&nbsp; Machine learning</h3>
                <p>
                    Machine learning is a multi-disciplinary subjectthat allows computers to simulate human learningbehaviors to acquire new knowledge and skills toprocess data more efficiently[5]. ML has a signifi-cant relationship with computational statistics andmathematical optimization, making it very suitablefor handling problems with high complexity[6].
                </p>
                <h4 className="introduction">2.3.1 &nbsp;&nbsp; Decision Tree</h4>
                <p>
                    Decision tree is a simple logical machine learning algorithm, it has various attractive features: simplicity, no parameters and being able to handle mixed-type data, so it is one of the most successful algorithms in machine learning[7].
                </p>
                <p>
                    A general decision tree has three elements: root node, internal node and leaf node[8]. When using a decision tree to make predictions, it is first necessary to judge the attribute value of the target object with the internal nodes of the decision tree, and then determine which branch node the target object enters according to the result. Repeat this step until reaches the leaf node, so that a classification result dataset can be obtained.
                </p>
                <h4 className="introduction">2.3.2 &nbsp;&nbsp; Support vector machine</h4>
                <p>
                    Support vector machines (SVM) is a binary classification model. SVM have the ability to learn data classification patterns with balanced accuracy and reproducibility[9].
                </p>
                <p>
                    The essence of SVM is a linear classifier, but it can be transformed into a non-linear classifier through kernel techniques. The strategy of SVM is to define the maximum interval, The interval types can be hard interval or soft interval. The hard interval means that the classification is completely correct and there is no error. The soft interval allows a certain error, that is, a part of the sample can be misclassified, which is more used in real classification.
                </p>
                <h4 className="introduction">2.3.3 &nbsp;&nbsp; KNN</h4>
                <p>
                    KNN (K-Nearest Neighbor) is one of the simplest machine learning algorithms, which can be used for classification and regression, and is a supervised learning algorithm. KNN is a non-parametric classification algorithm. It assigns to an unlabeled sample point, the class of the nearest of a set of previously labeled points[10].
                </p>
                <p>
                    The basic idea of KNN is that if most of the K most similar (ie the nearest neighbors in the feature space) samples of a sample in the feature space belong to a certain category, the sample also belongs to this category[11].
                </p>
                <p>
                    Whether it is classification or regression, we can see several key points of the KNN algorithm:
                </p>
                <ol>
                    <li>
                        Algorithm hyperparameter K;
                    </li>
                    <li>
                        Distance measurement, the distance of sample points in the feature space is a reflection of the similarity between sample points;
                    </li>
                    <li>
                        Classification decision rules, the minority obeys the majority.
                    </li>
                </ol>
                <p>
                    Among them, the selection of K value and the setting of distance metric are the most important issues.
                </p>
                <h3 className="introduction">2.4 &nbsp;&nbsp; SV-COMP</h3>
                <p>
                    SV-COMP is very influential in software verification and is regarded as the benchmark in this field. Currently, SV-COMP can be used to follow ANSI C, Java and C language generated in SMT format.
                </p>
                <p>
                    The SV-COMP competition consists of a series of verification tasks, including procedures, specifications and parameters. For the result of the verification, Answer, Witness and Time are included. Answer indicates whether the verification task conforms to the specification. True means that no counterexample can be found under the current parameter configuration and can be regarded as conforming to the specification; False means that a counterexample can be found under the current parameter configuration and can be regarded as not conforming to the specification; Unknown represents the current parameter configuration The verification task cannot be completed due to time or memory constraints[1].
                </p>
                <h2 className="introduction">3 &nbsp;&nbsp; Research Methodology</h2>
                <h3 className="introduction">3.1 &nbsp;&nbsp; Feature selection</h3>
                <p>
                    There are two methods for feature selection. For the first method,  experts select some more valuable features based on their prior experience. The second is to use deep learning for feature selection. The advantage of deep learning is that it can extract key features that are ignored by human beings. The disadvantage is that it takes a lot of time to obtain a good feature model.
                </p>
                <p>
                    In this project, we choose the first method to select features, because experts can quickly select valuable features based on their experience. However, when the experimental results of the first method are not in line with our expectations, we will consider to use the second method for feature selection, because it can obtain complex high-dimensional feature models through a lot of calculation.
                </p>
                <h3 className="introduction">3.2 &nbsp;&nbsp; Building the dataset</h3>
                <p>
                    Building the dataset can be divided into two parts. The first part is to get enough and representative C programs. The second part is to combine the C program with 40 different ESBMC parameter combinations to obtain the result. This result includes the verification result and the verification time. 
                </p>
                <p>
                    In the first part, we obtain representative C programs from the SV-COMP[1] verification task dataset as the main data set, and use the C programs in the open source code community as a supplement to the dataset. 
                </p>
                <p>
                    The main difficulty of the second part is the high cost of completing the construction of the entire dataset. In our previous experiment, in order to test the construction of a sub-data set containing 74 C programs, we tried more than 74x40 parameter combinations, which took nearly 35 hours. It can be foreseen that when the number of C programs contained in the dataset doubles, the time to build the data set will also double, and in the process of building the data set, every small verification task may appear due to exceptions, errors or timeouts interrupt the entire process, so we need to build a sandbox system that can automatically recover to ensure that each verification task runs independently and has complete logging.
                </p>
                <h3 className="introduction">3.3 &nbsp;&nbsp; Prediction model</h3>
                <p>
                    Due to a naive cognitive principle, we believe that C programs with similar structures should run similarly on ESBMC. Therefore, the purpose of the predictive model is to determine which sample in the new C program is most similar to the data set, so as to provide the user with the results of different parameter combinations of the sample program, and facilitate the user to select the new C program for verification and time-consuming. Here, we will use different classification algorithms, such as decision trees[8], KNN[10], SVM[9] and other traditional machine learning algorithms to complete the classification and evaluate the effect. Of course, when the above approaches are not effective, we will choose deep learning instead.
                </p>
                <h2 className="introduction">4 &nbsp;&nbsp; Ethics and professional considerations</h2>
                <p>
                    We will discuss the ethic of this project from the source of the data, the content of the data, and the resources or people that may be involved in the project.
                </p>
                <h3 className="introduction">4.1 &nbsp;&nbsp; The data source and data content</h3>
                <p>
                    The main part we use to construct the dataset is the verification tasks provided by SV-COMP. These verification tasks are mainly composed of configuration files and C programs. They have passed the verification of the organizing committee and participating members and have been recognized, so these codes will conform to the ethical principle. The remaining supplementary datasets will come from the open source community, and we will de-comment these codes to ensure that our dataset only has pure and functional C programs.
                </p>
                <h3 className="introduction">4.2 &nbsp;&nbsp; The resources and people involved in the project</h3>
                <p>
                    My mentor and I are the main participants in the project, and we will both serve only as research members. The computing resources needed for the project are provided by me, and the code resources are obtained from the open source community. Therefore, the people or resources involved in this project conform to the ethical principle.
                </p>
                <h2 className="introduction">5 &nbsp;&nbsp; Risk consideration</h2>
                <h3 className="introduction">5.1 &nbsp;&nbsp; Time risk</h3>
                <p>
                    In the process of the experiments that have been carried out, we found that building a dataset is a very time-consuming task, because a large number of C programs need to be verified to obtain a sufficient dataset. Some verification tasks take a long time, such as 15 minutes. This will take a very long time to build the entire dataset when a large number of verification tasks are time out. In order to estimate the total time consumption of constructing the dataset, we try to construct a sub-dataset as a prior test.
                </p>
                <p>
                    In this sub-dataset, there are a total of 3,500 verification tasks, 170 of which have timed out (i.e., running results cannot be obtained within 15 minutes), which means it will take more than 35 hours to complete the entire test dataset task. According to the scale of the dataset, we can draw the conclusion that if we want to build a complete dataset, the time may increase exponentially, which will be a very large time risk.
                </p>
                <p>
                    In order to deal with this risk, we need to build a system that can be interrupted, automatically recovered and has a complete log function. When an accident or program error occurs, the system can be automatically interrupted and automatically recovered, thereby ensuring 24-hour uninterrupted dataset construction.
                </p>
                <h3 className="introduction">5.2 &nbsp;&nbsp; The risk of lack in professional knowledge</h3>
                <p>
                    This project is based on the field of software verification and requires a certain professional knowledge background. The degree of overlap between my previous research field and the field of software verification is low, which means that I need to spend some time learning professional knowledge in this field. The time spent should be reflected in the project planning and Gantt chart, which allows me to reserve a certain amount of time in advance to ensure the smooth progress of the project tasks.
                </p>
                <h3 className="introduction">5.3 &nbsp;&nbsp; The risk of experimentation</h3>
                <p>
                    For this project, there are a variety of algorithms that can be used for feature extraction and machine learning. We are not sure which algorithm can achieve the expected results we want, so we may need to try a variety of algorithm combinations to ensure that the purpose of the experiment is satisfactory.
                </p>
                <h2 className="introduction">6 &nbsp;&nbsp; Project evaluation</h2>
                <h3 className="introduction">6.1 &nbsp;&nbsp; The validity of the dataset</h3>
                <p>
                    Because it is impossible to enumerate all C program codes, we need to construct a representative training dataset. Whether the dataset used for machine learning is sufficiently representative determines to a large extent whether the trained machine learning model is effective. Fortunately, SV-COMP provides some representative verification tasks, which can be used as the cornerstone of the dataset. Then we will select a part of the effective C program from the open source code community as a supplement to the dataset. As an evaluation method, we will cross-validate the entire dataset to ensure that the dataset can be used for machine learning model.
                </p>
                <h3 className="introduction">6.2 &nbsp;&nbsp; The validity of machine learning model</h3>
                <p>
                    In this project, we use F-score to evaluate our model. There are two parts in the whole model that are very important. The first part is accuracy, which is the ratio between the predicted value and the true value. This represents the probability that our model can provide correct results. The second part is the deviation. We need to count the average deviation between prediction and the true value. This represents whether the error can be small enough to help the user make a judgment close to the true result when a prediction error occurs.
                </p>
                <h2 className="introduction">7 &nbsp;&nbsp; Planning</h2>
                <p>
                    This project uses a Gantt chart to represent the plan. We divides the entire project into 6 sections, and each section is subdivided into sub-tasks performed on a weekly basis. These sub-tasks are marked by different color blocks for easy tracking. The milestone is composed of different rectangular color blocks at the bottom, and they represent the time period to reach the milestone.
                </p>
            </div>
        )
    }
}