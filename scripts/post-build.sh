if [ -d "./lib/src" ]; then
	mv ./lib/src/*.d.ts ./lib
	rm -rf ./lib/src
fi
