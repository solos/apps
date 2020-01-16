all: build 

build:
	cd ./sources/digwords && ls && pwd && gatsby build && rm -rf ../../digwords/* && cp -r public/* ../../digwords/
	#cd ./sources/kaifan && ls && pwd && gatsby build && rm -rf ../../kaifan/* && cp -r public/* ../../kaifan/
	cd ./sources/letter && ls && pwd && gatsby build && rm -rf ../../letter/* && cp -r public/* ../../letter/
	#cd ./sources/goodreader && ls && pwd && gatsby build && rm -rf ../../goodreader/* && cp -r public/* ../../goodreader/
	#cd ./soruces/namename && ls && pwd && gatsby build && rm -rf ../../goodreader/* && cp -r public/* ../../namename/

upload:
	ls
