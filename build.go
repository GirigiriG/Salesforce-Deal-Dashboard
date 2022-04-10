package main

import (
	"fmt"
	"os/exec"
)

func main() {

	cmd := exec.Command("sfdx", "force:org:list")

	stdOut, err := cmd.Output()

	if err != nil {
		fmt.Println(err.Error())
		return
	}

	fmt.Println(string(stdOut))

}
