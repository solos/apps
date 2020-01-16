all: build 

build:
	cd ./digwords && ls && pwd && gatsby build && cp -r public/* ../public/digwords/
	#cd ./kaifan && ls && pwd && gatsby build && cp -r public/* ../public/kaifan/
	cd ./letter && ls && pwd && gatsby build && cp -r public/* ../public/letter/
	#cd ./goodreader && ls && pwd && gatsby build && cp -r public/* ../public/goodreader/
	#cd ./namename && ls && pwd && gatsby build && cp -r public/* ../public/namename/

upload:
	ls
