# Deploying BERT on docker
I shall use BERT that is trained by huggingface on a dataset for questions and answers i.e. Stanford Question Answering Dataset (SQuAD) and deploy the  model on Heroku for real time inference , also add scoring metric suitable for your model. on a
sample or a small dataset .

## Local Deployment
### Requirements

Install the required libraries using

`pip install -r requirements.txt`

### Inference
Run the server using

`python app.py`

Then go this url
http://localhost:5000


### Docker Deployment

`docker-compose up`

do not forget to edit the default.conf with : 

```
server {
    listen 80;
    root /home/ubuntu/react-flask-app/build;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api {
        include proxy_params;
        proxy_pass http://localhost:5000;
    }
}

```

### sample paragraph 
The Vatican Apostolic Library (), more commonly called the Vatican Library or simply the Vat, is the library of the Holy See, located in Vatican City. Formally established in 1475, although it is much older, it is one of the oldest libraries in the world and contains one of the most significant collections of historical texts. It has 75,000 codices from throughout history, as well as 1.1 million printed books, which include some 8,500 incunabula. \n\nThe Vatican Library is a research library for history, law, philosophy, science and theology. The Vatican Library is open to anyone who can document their qualifications and research needs. Photocopies for private study of pages from books published between 1801 and 1990 can be requested in person or by mail. \n\nIn March 2014, the Vatican Library began an initial four-year project of digitising its collection of manuscripts, to be made available online. \n\nThe Vatican Secret Archives were separated from the library at the beginning of the 17th century; they contain another 150,000 items. \n\nScholars have traditionally divided the history of the library into five periods, Pre-Lateran, Lateran, Avignon, Pre-Vatican and Vatican. \n\nThe Pre-Lateran period, comprising the initial days of the library, dated from the earliest days of the Church. Only a handful of volumes survive from this period, though some are very significant.

### sample question
When was the Vat formally opened?
### Sample dataset

{
 "data": [{
     "source": "wikipedia",
            "id": "3zotghdk5ibi9cex97fepx7jetpso7",
            "filename": "Vatican_Library.txt",
            "story": "The Vatican Apostolic Library (), more commonly called the Vatican Library or simply the Vat, is the library of the Holy See, located in Vatican City. Formally established in 1475, although it is much older, it is one of the oldest libraries in the world and contains one of the most significant collections of historical texts. It has 75,000 codices from throughout history, as well as 1.1 million printed books, which include some 8,500 incunabula. \n\nThe Vatican Library is a research library for history, law, philosophy, science and theology. The Vatican Library is open to anyone who can document their qualifications and research needs. Photocopies for private study of pages from books published between 1801 and 1990 can be requested in person or by mail. \n\nIn March 2014, the Vatican Library began an initial four-year project of digitising its collection of manuscripts, to be made available online. \n\nThe Vatican Secret Archives were separated from the library at the beginning of the 17th century; they contain another 150,000 items. \n\nScholars have traditionally divided the history of the library into five periods, Pre-Lateran, Lateran, Avignon, Pre-Vatican and Vatican. \n\nThe Pre-Lateran period, comprising the initial days of the library, dated from the earliest days of the Church. Only a handful of volumes survive from this period, though some are very significant.",
            "questions": [
                {
                    "input_text": "When was the Vat formally opened?",
                    "turn_id": 1
                },
                {
                    "input_text": "what is the library for?",
                    "turn_id": 2
                },
                {
                    "input_text": "for what subjects?",
                    "turn_id": 3
                },
                {
                    "input_text": "and?",
                    "turn_id": 4
                },
                {
                    "input_text": "what was started in 2014?",
                    "turn_id": 5
                },
                {
                    "input_text": "how do scholars divide the library?",
                    "turn_id": 6
                },
                {
                    "input_text": "how many?",
                    "turn_id": 7
                },
                {
                    "input_text": "what is the official name of the Vat?",
                    "turn_id": 8
                },
                {
                    "input_text": "where is it?",
                    "turn_id": 9
                },
                {
                    "input_text": "how many printed books does it contain?",
                    "turn_id": 10
                },
                {
                    "input_text": "when were the Secret Archives moved from the rest of the library?",
                    "turn_id": 11
                },
                {
                    "input_text": "how many items are in this secret collection?",
                    "turn_id": 12
                },
                {
                    "input_text": "Can anyone use this library?",
                    "turn_id": 13
                },
                {
                    "input_text": "what must be requested to view?",
                    "turn_id": 14
                },
                {
                    "input_text": "what must be requested in person or by mail?",
                    "turn_id": 15
                },
                {
                    "input_text": "of what books?",
                    "turn_id": 16
                },
                {
                    "input_text": "What is the Vat the library of?",
                    "turn_id": 17
                },
                {
                    "input_text": "How many books survived the Pre Lateran period?",
                    "turn_id": 18
                },
                {
                    "input_text": "what is the point of the project started in 2014?",
                    "turn_id": 19
                },
                {
                    "input_text": "what will this allow?",
                    "turn_id": 20
                }
            ],
            "answers": [
                {
                    "span_start": 151,
                    "span_end": 179,
                    "span_text": "Formally established in 1475",
                    "input_text": "It was formally established in 1475",
                    "turn_id": 1
                },
                {
                    "span_start": 454,
                    "span_end": 494,
                    "span_text": "he Vatican Library is a research library",
                    "input_text": "research",
                    "turn_id": 2
                },
                {
                    "span_start": 457,
                    "span_end": 511,
                    "span_text": "Vatican Library is a research library for history, law",
                    "input_text": "history, and law",
                    "turn_id": 3
                },
                {
                    "span_start": 457,
                    "span_end": 545,
                    "span_text": "Vatican Library is a research library for history, law, philosophy, science and theology",
                    "input_text": "philosophy, science and theology",
                    "turn_id": 4
                },
                {
                    "span_start": 769,
                    "span_end": 879,
                    "span_text": "March 2014, the Vatican Library began an initial four-year project of digitising its collection of manuscripts",
                    "input_text": "a  project",
                    "turn_id": 5
                },
                {
                    "span_start": 1048,
                    "span_end": 1127,
                    "span_text": "Scholars have traditionally divided the history of the library into five period",
                    "input_text": "into periods",
                    "turn_id": 6
                },
                {
                    "span_start": 1048,
                    "span_end": 1128,
                    "span_text": "Scholars have traditionally divided the history of the library into five periods",
                    "input_text": "five",
                    "turn_id": 7
                },
                {
                    "span_start": 4,
                    "span_end": 94,
                    "span_text": "Vatican Apostolic Library (), more commonly called the Vatican Library or simply the Vat, ",
                    "input_text": "The Vatican Apostolic Library",
                    "turn_id": 8
                },
                {
                    "span_start": 94,
                    "span_end": 150,
                    "span_text": "is the library of the Holy See, located in Vatican City.",
                    "input_text": "in Vatican City",
                    "turn_id": 9
                },
                {
                    "span_start": 328,
                    "span_end": 412,
                    "span_text": " It has 75,000 codices from throughout history, as well as 1.1 million printed books",
                    "input_text": "1.1 million",
                    "turn_id": 10
                },
                {
                    "span_start": 917,
                    "span_end": 1009,
                    "span_text": "atican Secret Archives were separated from the library at the beginning of the 17th century;",
                    "input_text": "at the beginning of the 17th century;",
                    "turn_id": 11
                },
                {
                    "span_start": 915,
                    "span_end": 1046,
                    "span_text": " Vatican Secret Archives were separated from the library at the beginning of the 17th century; they contain another 150,000 items. ",
                    "input_text": "150,000",
                    "turn_id": 12
                },
                {
                    "span_start": 546,
                    "span_end": 643,
                    "span_text": " The Vatican Library is open to anyone who can document their qualifications and research needs. ",
                    "input_text": "anyone who can document their qualifications and research needs.",
                    "turn_id": 13
                },
                {
                    "span_start": -1,
                    "span_end": -1,
                    "span_text": "unknown",
                    "input_text": "unknown",
                    "turn_id": 14,
                    "bad_turn": "true"
                },
                {
                    "span_start": 643,
                    "span_end": 764,
                    "span_text": "Photocopies for private study of pages from books published between 1801 and 1990 can be requested in person or by mail. ",
                    "input_text": "Photocopies",
                    "turn_id": 15
                },
                {
                    "span_start": 644,
                    "span_end": 724,
                    "span_text": "hotocopies for private study of pages from books published between 1801 and 1990",
                    "input_text": "only books published between 1801 and 1990",
                    "turn_id": 16
                },
                {
                    "span_start": 78,
                    "span_end": 125,
                    "span_text": "simply the Vat, is the library of the Holy See,",
                    "input_text": "the Holy See",
                    "turn_id": 17
                },
                {
                    "span_start": 1192,
                    "span_end": 1384,
                    "span_text": "Pre-Lateran period, comprising the initial days of the library, dated from the earliest days of the Church. Only a handful of volumes survive from this period, though some are very significant",
                    "input_text": "a handful of volumes",
                    "turn_id": 18
                },
                {
                    "span_start": 785,
                    "span_end": 881,
                    "span_text": "Vatican Library began an initial four-year project of digitising its collection of manuscripts, ",
                    "input_text": "digitising manuscripts",
                    "turn_id": 19
                },
                {
                    "span_start": 868,
                    "span_end": 910,
                    "span_text": "manuscripts, to be made available online. ",
                    "input_text": "them to be viewed online.",
                    "turn_id": 20
                }
            ],
            "name": "Vatican_Library.txt"
 }]
}


can get more samples from [http://downloads.cs.stanford.edu/nlp/data/coqa/coqa-train-v1.0.json]