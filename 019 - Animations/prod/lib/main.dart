import 'package:flutter/material.dart';

void main() {
  runApp(AnimationDemo());
}

class AnimationDemo extends StatefulWidget {
  @override
  createState() => _AnimationDemoState();
}

class _AnimationDemoState extends State<AnimationDemo>
    with TickerProviderStateMixin {
  AnimationController _controller;

  @override
  initState() {
    super.initState();

    _controller = AnimationController(
      value: 50.0,
      lowerBound: 50.0,
      upperBound: 300.0,
      duration: Duration(seconds: 1),
      vsync: this,
    );
  }

  @override
  Widget build(context) {
    return MaterialApp(
      home: Scaffold(
        body: GestureDetector(
          onTap: () {
            final status = _controller.status;
            if (status == AnimationStatus.completed) {
              _controller.reverse();
            } else {
              _controller.animateTo(
                300.0,
                curve: Curves.bounceOut,
              );
            }
          },
          child: Center(
            child: AnimatedBuilder(
              animation: _controller,
              builder: (context, child) {
                return Container(
                  child: child,
                  height: _controller.value,
                  width: _controller.value,
                );
              },
              child: Container(
                color: Colors.red,
                constraints: BoxConstraints.expand(),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
